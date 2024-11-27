'use client'

import { useTheme } from '@/context/ThemeContext';
import { Theme } from '@/types/theme';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const themes: Theme[] = ['claro', 'oscuro'];

    const handleSelectChange = (value: string) => {
        setTheme(value as Theme)
    }

    return (
        <Select
            value={theme}
            onValueChange={handleSelectChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={theme.charAt(0).toUpperCase() + theme.slice(1)} />
            </SelectTrigger>
            <SelectContent>
                {themes.map((t) => (
                    <SelectItem key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}