import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

export function Base(props: Props): React.ReactElement {
    const navigate = useNavigate();

    return (
        <div className="flex h-[100vh] w-[100vw] bg-[#0d1117] text-[#c9d1d9] overflow-hidden">
            <aside className="w-48 bg-[#161b22] p-4 text-[#c9d1d9] shadow-lg relative z-10">
                <p className="text-lg font-bold">Edgar Lira</p>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Redes</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://www.linkedin.com/in/edgarlira25" target="_blank" rel="noopener noreferrer" className="hover:text-[#58a6ff] transition-transform transform hover:scale-105">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/EdgarLira25" target="_blank" rel="noopener noreferrer" className="hover:text-[#58a6ff] transition-transform transform hover:scale-105">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="flex flex-col flex-1 relative z-10">
                <header className="w-full bg-[#21262d] p-4 text-[#c9d1d9] shadow-md flex justify-between items-center h-12">
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <button
                                    onClick={() => navigate('/')}
                                    className="hover:text-[#58a6ff] transition-all hover:underline"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/resume')}
                                    className="hover:text-[#58a6ff] transition-all hover:underline"
                                >
                                    Curriculo
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="hover:text-[#58a6ff] transition-all hover:underline"
                                >
                                    Projetos
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <button className="bg-[#238636] text-white px-4 py-2 rounded-lg hover:bg-[#2ea043] transition-all transform hover:scale-105">
                        Download CV
                    </button>
                </header>
                <main className="flex-1 p-6 bg-[#0d1117] text-[#c9d1d9] overflow-auto relative">
                    {props.children}
                </main>
            </div>
        </div>
    );
}
