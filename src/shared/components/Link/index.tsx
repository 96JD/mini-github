interface Props {
	href: string;
	label: string;
}

export default function Link({ href, label }: Readonly<Props>) {
	return (
		<a className="text-decoration-none p-1" href={href} target="_blank" rel="noreferrer">
			{label}
		</a>
	);
}
