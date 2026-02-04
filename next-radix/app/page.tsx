import Link from "next/link"
import { componentMap, components } from "@/lib/components"
import { blockMap, blocks } from "@/lib/blocks"

export default function Page() {
	return (
		<div className="p-10">
			<h2 className="text-lg font-semibold mb-4">Components ({components.length})</h2>
			<ul className="grid grid-cols-5 gap-2">
				{Array.from(componentMap.values()).map(({ name }) => (
					<li key={name}>
						<Link href={`/${name}`}>
							{name}
						</Link>
					</li>
				))}
			</ul>

			<h2 className="text-lg font-semibold mb-4 mt-10">Blocks ({blocks.length})</h2>
			<ul className="flex flex-col gap-2">
				{Array.from(blockMap.values()).map(({ name }) => (
					<li key={name}>
						<Link href={`/blocks/${name}`}>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
