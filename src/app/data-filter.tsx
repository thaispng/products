import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar as CalendarIcon, XCircle } from "lucide-react"

interface DateFilterProps {
    date: Date | undefined
    setDate: (date: Date | undefined) => void
}

export function DateFilter({ date, setDate }: DateFilterProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={`w-[280px] justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        <span className="flex items-center justify-between w-full">
                            {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                            <Button
                                variant="ghost"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setDate(undefined)
                                }}
                                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                            >
                                <XCircle className="h-4 w-4" />
                            </Button>
                        </span>
                    ) : (
                        <span>Filtrar por data</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    locale={ptBR}
                />
            </PopoverContent>
        </Popover>
    )
}