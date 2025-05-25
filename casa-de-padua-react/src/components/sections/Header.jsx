export default function Header() {
    return (
        <header
            className="text-casa-white py-20 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/djt5usq8q/image/upload/v1746028606/backgroundweb_CASA_uvquqh.png')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                    <div className="md:w-1/3">
                        <img 
                            src="https://res.cloudinary.com/djt5usq8q/image/upload/f_auto,q_auto:good,w_200/v1744476120/logo_rvlpvo.webp"
                            alt="CASA de Padua Logo"
                            className="w-48 mx-auto md:mx-0 animate-float"
                        />
                    </div>
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Club Atletico San Antonio de Padua
                        </h1>
                        <p className="text-xl">Tu CASA desde 1926</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
