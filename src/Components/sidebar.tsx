import { FaDev, FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiFastapi, SiTypescript, SiLinkedin, SiGithub, SiGit, SiLinux, SiDocker } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function Sidebar() {
    const linkClass = "hover:text-[#58a6ff] transition-transform transform hover:scale-105 flex items-center gap-2";

    return (
        <aside className="w-48 bg-[#161b22] p-4 text-[#c9d1d9] shadow-lg">
            <div className="flex items-center space-x-4">
                <FaDev size={50} />
                <div>
                    <p className="text-lg font-bold">Edgar Lira</p>
                    <p className="text-gray-600">Engenheiro de Software</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold mb-2">Skills</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <FaPython className="text-yellow-500" /> Python
                        </a>
                    </li>
                    <li>
                        <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiFlask className="text-gray-400" /> Flask
                        </a>
                    </li>
                    <li>
                        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiFastapi className="text-green-500" /> FastAPI
                        </a>
                    </li>
                    <li>
                        <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <VscAzure className="text-blue-500" /> Azure
                        </a>
                    </li>
                    <li>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiTypescript className="text-blue-400" /> TypeScript
                        </a>
                    </li>
                    <li>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <FaReact className="text-cyan-400" /> React
                        </a>
                    </li>
                    <li>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiGit className="text-orange-400" /> Git
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiLinux /> Linux
                        </a>
                    </li>
                    <li>
                        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiDocker className="text-cyan-400" /> Docker
                        </a>
                    </li>

                </ul>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold mb-2">Redes</h3>
                <ul className="space-y-2">
                    <li>
                        <a href="https://www.linkedin.com/in/edgarlira25" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiLinkedin className="text-blue-400" /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/EdgarLira25" target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <SiGithub className="text-black-400" /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
