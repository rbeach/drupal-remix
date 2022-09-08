import { Node } from "~/utils/types";

// Gets nodes of type
export async function getNodesOfType(nodeType: string | undefined) {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/node/${nodeType}`
  ).then((response) => response.json());

  const nodes = response.data.map((node: Node) => {
    return { id: node.id, ...node.attributes };
  })

  return nodes;
}

// Gets a single node
export async function getNode(nodeType: string | undefined, nodeUuid: string | undefined) {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/node/${nodeType}/${nodeUuid}`
  ).then((response) => response.json());

  return response.data.attributes;
}