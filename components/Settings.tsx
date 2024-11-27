import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ThemeToggler } from "./ThemeToggler"
import { SettingsIcon } from "@/assets/icons/ui/SettingsIcon"

const Settings = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <SettingsIcon className="size-6 hover:rotate-180 transition-all hover:text-primary" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-bold text-xl">Configuración</DialogTitle>
                    {/* <DialogDescription className="text-md text-muted-foreground">Personaliza la experiencia a tu gusto ajustando las opciones disponibles.</DialogDescription> */}
                </DialogHeader>
                <div>
                    <div>
                        <p className="text-lg font-semibold text-foreground">Temas</p>
                        <span className="text-sm text-muted-foreground mb-4 block">Cambia entre opciones claras u oscuras para mejorar la apariencia y la comodidad al usar la aplicación.</span>
                        <ThemeToggler />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button >Cerrar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Settings