import { logo } from '../assets';

const Hero = () => {
    return (
        <header className="w-[100vw] bg-jagged-ice-700 text-white py-10">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center mb-10 pt-3">
                    <img src={logo} alt="logo" className='object-contain' width={200} />

                    <button
                        onClick={() => window.open('https://github.com/sreeram3015')}
                        className='bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300'>
                        Github
                    </button>
                </nav>

                <h1 className="text-4xl font-bold text-center">
                    <span className="text-jagged-ice-300">Wisdara</span>
                    <br className='hidden md:block' />
                    Effortlessly summarizes articles with advanced capabilities.
                </h1>

                <h2 className="text-lg text-center mt-4">
                    Ease your reading with Wisdara, an open-source summarizer crafting clear, concise summaries from lengthy articles.
                </h2>
            </div>
        </header>
    );
};

export default Hero;
