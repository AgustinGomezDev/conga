'use client';

import { useTheme } from '@/context/ThemeContext';
import { Theme } from '@/types/theme';

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const themes: Theme[] = ['claro', 'oscuro', 'noche', 'naturaleza', 'retro', 'brillante', 'apagado'];

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    const themeGradients: Record<Theme, string> = { // color1: foreground, color2: accent, color3: background
        claro: 'from-theme-claro-start via-theme-claro-mid to-theme-claro-end',
        oscuro: 'from-theme-oscuro-start via-theme-oscuro-mid to-theme-oscuro-end',
        noche: 'from-theme-noche-start via-theme-noche-mid to-theme-noche-end',
        naturaleza: 'from-theme-naturaleza-start via-theme-naturaleza-mid to-theme-naturaleza-end',
        retro: 'from-theme-retro-start via-theme-retro-mid to-theme-retro-end',
        brillante: 'from-theme-brillante-start via-theme-brillante-mid to-theme-brillante-end',
        apagado: 'from-theme-apagado-start via-theme-apagado-mid to-theme-apagado-end',
    };
    return (
        <div className="flex gap-4">
            {themes.map((t) => (
                <div className='flex flex-col items-center gap-2'>
                    <button
                        key={t}
                        onClick={() => handleThemeChange(t)}
                        className={`size-12 rounded-full transition-transform hover:scale-110 p-0 ${theme === t && 'ring-2 ring-accent'} bg-gradient-to-br ${themeGradients[t]}`}
                        aria-label={`Cambiar tema a ${t}`}
                    />
                    <span className='text-sm'>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </div>
            ))}
        </div>
        // Old select ( now in component Settings )
        //         <Select
        //             value={theme}
        //             onValueChange={handleSelectChange}
        //         >
        //             <SelectTrigger className="w-[180px]">
        //                 <SelectValue placeholder={theme.charAt(0).toUpperCase() + theme.slice(1)} />
        //             </SelectTrigger>
        //             <SelectContent>
        //                 {themes.map((t) => (
        //                     <SelectItem key={t} value={t}>
        //                         {t.charAt(0).toUpperCase() + t.slice(1)}
        //                     </SelectItem>
        //                 ))}
        //             </SelectContent>
        //         </Select>
    );
}
