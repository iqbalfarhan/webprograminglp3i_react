import Button from "./Button";
import { Users } from "lucide-react";

const PostItem = (props) => {
    const { judul, penulis, tanggal } = props;
    return (
        <div className="shadow-xl m-12 p-6 rounded-lg">
            <div className="text-blue-500 text-xl font-bold">{judul}</div>
            <div className="text-blue-500 text-sm">
                {penulis} - {tanggal}
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                ducimus error distinctio omnis cumque quasi pariatur similique
                quas, incidunt voluptate quisquam eius vel, voluptatem nobis
                adipisci, recusandae quis veritatis harum!
            </p>

            <Button icon={Users} variant={"dark"} label={"share"} />
        </div>
    );
};

export default PostItem;
