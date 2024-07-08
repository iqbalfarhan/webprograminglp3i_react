const Project = () => {
    const projects = [
        {
            judul: "aplikasi chat kelas ase2",
            deskripsi:
                "aplikasi chat kelas ase2 ini dibuat menggunakan reactjs",
        },
        {
            judul: "Web app profile",
            deskripsi:
                "aplikasi chat kelas ase2 ini dibuat menggunakan reactjs",
        },
    ];
    return (
        <div>
            <h1>Ini project saya</h1>

            {projects.map((p, i) => (
                <div key={i}>
                    <img src={"https://robohash.org/" + p.judul} />
                    <h4>{p.judul}</h4>
                    <p>{p.deskripsi}</p>
                </div>
            ))}
        </div>
    );
};

export default Project;
