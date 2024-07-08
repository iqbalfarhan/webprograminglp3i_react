import Button from "./components/Button";
import PostItem from "./components/PostItem";

const App = () => {
    const posts = [
        {
            judul: "contoh ini judul",
            penulis: "iqbal farhan",
            tanggal: "2 juli 98",
        },
        {
            judul: "ayo kita istirahat habis ini",
            penulis: "iqbal farhan",
            tanggal: "2 agustus 98",
        },
        {
            judul: "ayo sud",
            penulis: "iqbal farhan",
            tanggal: "2 agustus 98",
        },
    ];
    return (
        <>
            <div>
                <Button variant={"light"} label={"ini button light"} />
                <Button variant={"dark"} label={"ini button dark"} />
            </div>
            {posts.map((post, index) => (
                <PostItem
                    key={index}
                    judul={post.judul}
                    penulis={post.penulis}
                    tanggal={post.tanggal}
                />
            ))}
        </>
    );
};

export default App;
