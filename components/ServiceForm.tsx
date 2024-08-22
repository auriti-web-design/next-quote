import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormItem, FormLabel, FormControl, FormField, FormDescription } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ServiceFormProps {
  projectType: string;
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

type FormData = {
  designOption: string;
  contentManagement: string;
  additionalFeatures: string[];
  maintenancePlan: string;
};

export function ServiceForm({ projectType, onSubmit, onBack }: ServiceFormProps) {
  const form = useForm<FormData>({
    defaultValues: {
      designOption: '',
      contentManagement: '',
      additionalFeatures: [],
      maintenancePlan: '',
    },
  });

  const { control, handleSubmit, watch } = form;
  const formValues = watch();

  const calculateProgress = () => {
    const totalFields = 4;
    const filledFields = Object.values(formValues).filter(value =>
      Array.isArray(value) ? value.length > 0 : value !== ''
    ).length;
    return (filledFields / totalFields) * 100;
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-semibold mb-4">Configurazione {projectType}</h3>
            <Progress value={calculateProgress()} className="mb-6" />

            <div className="space-y-6">
              <FormField
                control={control}
                name="designOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opzioni di Design</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="template" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Template Predefinito
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="custom" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Design Personalizzato
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      Scegli il tipo di design per il tuo progetto.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="contentManagement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gestione dei Contenuti</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="basic" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Gestione Base
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="advanced" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Gestione Avanzata (SEO, Multilingua)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      Scegli come gestire i contenuti del tuo progetto.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="additionalFeatures"
                render={() => (
                  <FormItem>
                    <FormLabel>Funzionalità Aggiuntive</FormLabel>
                    <div className="space-y-2">
                      {['e-commerce', 'crm', 'chat', 'analytics'].map((feature) => (
                        <FormField
                          key={feature}
                          control={control}
                          name="additionalFeatures"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={feature}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(feature)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, feature])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== feature
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {feature.charAt(0).toUpperCase() + feature.slice(1)}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormDescription>
                      Seleziona le funzionalità aggiuntive per il tuo progetto.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="maintenancePlan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Piano di Manutenzione</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="standard" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Standard
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="premium" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Premium (Aggiornamenti 24/7)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      Scegli il piano di manutenzione per il tuo progetto.
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>Indietro</Button>
          <Button type="submit">Avanti</Button>
        </div>
      </form>
    </Form>
  );
}