import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getNodesOfType } from "~/models/node.server";

type LoaderData = {
  nodeType: string,
  nodes: Awaited<ReturnType<typeof getNodesOfType>>;
};

export const loader: LoaderFunction = async ({params}) => {
  return json({
    nodeType: params.nodeType,
    nodes: await getNodesOfType(params.nodeType),
  });
};

export default function NodeTypeIndex() {
  const { nodeType, nodes } = useLoaderData() as LoaderData;

  return (
    <div>
      <h1>List of {nodeType} nodes:</h1>
      <ul>
        { nodes.map((node: any, index: number) => (
          <li>
            <Link to={node.id}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}