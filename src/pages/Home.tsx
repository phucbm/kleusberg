import SegmentsListing from "../modules/segments/components/SegmentsListing";

const Home = () => {
    return (
        <>

            <div className="copy-headline hidden">
                <h1>44 MODUL-SEGMENTE</h1>
                <h2>UNENDLICHE RAUMMÖGLICHKEITEN</h2>
                <p>
                    Mit den 44 Modul-Segmenten aus unserem Schulbaukasten können Sie unendliche Raummöglichkeiten für
                    Ihre neue
                    Schule konfigurieren und sich somit ihre Schule genau nach Ihren Anforderungen aufbauen.
                </p>
                <div className="size-[28px]">
                    IHR
                    PRODUKT
                    FÜR DEN SCHULBAU
                </div>
            </div>

            <SegmentsListing/>
        </>
    );
};

export default Home;