import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getNode } from "~/models/node.server";

type LoaderData = {
  node: Awaited<ReturnType<typeof getNode>>;
};

export const loader: LoaderFunction = async ({params}) => {
  return json({
    node: await getNode(params.nodeType, params.nodeUuid),
  });
};

export default function NodeRoute() {
  const { node } = useLoaderData() as LoaderData;

  return (
    <div>
      <h1>{ node.title }</h1>

      <div>
        <div dangerouslySetInnerHTML={{ __html: node.body.processed }}/>
      </div>
    </div>
  );
}