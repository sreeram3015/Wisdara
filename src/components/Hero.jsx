import { logo } from '../assets'


const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center
        flex-col">
            <nav className="flex justify-between
            items-center w-full mb-10 pt-3">
                <img src={logo} alt="logo"
                    className='object-contain'
                    width={200} />


                <button type='button'
                    onClick={() => window.open('https://github.com/sreeram3015')}
                    className='black_btn'>
                    Github
                </button>
            </nav>


            <h1 className="head_text">
                <span className="text-[#BAE8E8]">
                    Wisdara
                </span>
                <br className='max-md:hidden' />
                Effortlessly summarizes articles with advanced capabilities.
            </h1>

            <h2 className="desc">
                Ease your reading with Wisdara, an open-source summarizer crafting clear, concise summaries from lengthy articles.
            </h2>
        </header>
    )
}

export default Hero