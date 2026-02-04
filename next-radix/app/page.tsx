import Link from "next/link"
import { componentMap, components } from "@/lib/components"

export default function Page() {
	return (
		<div className="p-10">
			<ul className="flex flex-col gap-2">
				{Array.from(componentMap.values()).map(({ name }) => (
					<li key={name}>
						<Link href={`/${name}`}>
							{name}
						</Link>
					</li>
				))}
			</ul>
			<div className="flex justify-between mt-8 pt-4 border-t">
				<span className="text-muted-foreground">{components[0]}</span>
				<span className="text-muted-foreground">
					{components[components.length - 1]}
				</span>
			</div>
		</div>
	)
}
