'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

interface DatePickerFormProps {
    selectedDate: Date | undefined;
    onDateChange: (date: Date) => void; // Cambiado para asegurar que sea un Date
}

const DatePickerForm: React.FC<DatePickerFormProps> = ({ selectedDate, onDateChange }) => {
    const [date, setDate] = React.useState<Date | undefined>(selectedDate);

    const handleDateSelect = (newDate: Date | undefined) => {
        if (newDate) { // Solo pasa una fecha si existe
            setDate(newDate);
            onDateChange(newDate);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-[240px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP', { locale: es }) : <span>Selecciona una fecha</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                    locale={es}
                />
            </PopoverContent>
        </Popover>
    );
};

export default DatePickerForm;
