import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ id, title, description, imageUrl }) {
  return (
    <div className="card mb-3 d-flex flex-row">
      <Image
        src={imageUrl}
        className="img-fluid"
        alt={title}
        style={{
          borderRadius: "8px",
          margin: "10px",
        }}
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text col-6 text-truncate">{description}</p>
        <Link href={`blogs/${id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}
