import Card from "@/components/home/Card";
const Home = () => {
    return ( 
        <main className="bg-black p-20">
            <div className="flex flex-wrap justify-between gap-20">
            <Card name="Game 1"  desc="lorem ipsum ksajfiofnsao ajs dfs go fwaefw eufnweuf" thumbnail={"/game.png"} id={1}></Card>
            <Card name="Game 2"  desc="lorem ipsum ksajfiofnsao ajs dfs go fwaefw eufnweuf" thumbnail={"/game.png"} id={2}></Card>
            <Card name="Space Shooter"  desc="lorem ipsum ksajfiofnsao ajs dfs go fwaefw eufnweuf" thumbnail={"/game.png"} id={3}></Card>
            </div>
        </main>
     );
}
 
export default Home;