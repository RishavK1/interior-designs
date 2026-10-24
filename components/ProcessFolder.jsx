import Image from "next/image";

export default function ProcessFolder({ number, label, title, description, image, imageAlt, files }) {
  return (
    <details className="process-folder">
      <summary className="process-folder-toggle">
        <span className="folder-art" aria-hidden="true">
          <span className="folder-tab" />
          <span className="folder-paper folder-paper-back"><i /><i /><i /></span>
          <span className="folder-paper folder-paper-front">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 80vw, 30vw" />
          </span>
          <span className="folder-body" />
          <span className="folder-glint" />
        </span>
        <span className="folder-copy">
          <span className="folder-number">{number} <i /> {label}</span>
          <span className="folder-title">{title}</span>
          <span className="folder-description">{description}</span>
          <span className="folder-action"><span className="folder-action-open">Explore this stage</span><span className="folder-action-close">Close stage</span><b aria-hidden="true">↗</b></span>
        </span>
      </summary>
      <div className="folder-contents">
        <span className="folder-contents-label">WHAT WE’LL EXPLORE</span>
        <ul>{files.map((file) => <li key={file}><span aria-hidden="true">✳</span>{file}</li>)}</ul>
      </div>
    </details>
  );
}
