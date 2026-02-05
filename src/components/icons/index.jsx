// Import Tech Icons
import BootstrapSvg from "@/assets/icons/tech/bootstrap.svg?react";
import DockerSvg from "@/assets/icons/tech/docker-icon.svg?react";
import JavascriptSvg from "@/assets/icons/tech/javascript.svg?react";
import NodeJsSvg from "@/assets/icons/tech/nodejs-icon.svg?react";
import SalesforceSvg from "@/assets/icons/tech/salesforce.svg?react";
import TailwindSvg from "@/assets/icons/tech/tailwindcss-icon.svg?react";
import UbuntuSvg from "@/assets/icons/tech/ubuntu.svg?react";
import ReactSvg from "@/assets/icons/tech/react_dark.svg?react";

// Import Social Icons
import LinkedinSvg from "@/assets/icons/social/linkedin-icon.svg?react";
import GithubSvg from "@/assets/icons/social/github-icon.svg?react";

// Import UI Icons
import ManageAccountSvg from "@/assets/icons/ui/ManageAccount.svg?react";

// Factory para crear componentes de iconos con clases por defecto
const createIcon = (SvgComponent) => {
    return ({ className = '', ...props }) => (
        <SvgComponent
            className={`h-4 w-4 ${className}`}
            fill="currentColor"
            {...props}
        />
    );
};

//Tech Icons
export const BootstrapIcon = createIcon(BootstrapSvg);
export const DockerIcon = createIcon(DockerSvg);
export const JavascriptIcon = createIcon(JavascriptSvg);
export const NodeJsIcon = createIcon(NodeJsSvg);
export const SalesforceIcon = createIcon(SalesforceSvg);
export const TailwindIcon = createIcon(TailwindSvg);
export const UbuntuIcon = createIcon(UbuntuSvg);
export const ReactIcon = createIcon(ReactSvg);

//Social Icons
export const LinkedinIcon = createIcon(LinkedinSvg);
export const GithubIcon = createIcon(GithubSvg);

//UI Icons
export const ManageAccountIcon = createIcon(ManageAccountSvg);
