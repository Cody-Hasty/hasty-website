import { Repo } from "@/types/gitApi"
import { repoNameTitle } from "@/utils/gitApiUtils";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectRowProps = {
  repo: Repo
}

export default function ProjectRowComponent({ repo }: ProjectRowProps) {
  return (
    <li className="list-group-item card w-80 max-w-80 lg:w-96 lg:max-w-96 rounded border-2" key={repo.id}>
      <h3 className="card-header border-0 bg-transparent">
        <a className="flex flex-row justify-between no-underline" href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repoNameTitle(repo.name)} ({repo.name})
          <FaExternalLinkAlt className="ml-3 shrink-0 w-6 h-6 mt-1.5" />
        </a>
      </h3>
      <div className="card-body flex flex-col pt-0 ml-2">
        <span>
          <strong>Created: </strong>
          {new Date(repo.created_at).toDateString()}
        </span>
        <span>
          <strong>Last Updated: </strong>
          {new Date(repo.updated_at).toDateString()}
        </span>
        {!!repo.language && (
          <span>
            <strong>Language: </strong>
            {repo.language}
          </span>
        )}
        {!!repo.description && (
          <span className="flex flex-col">
            <strong>Description: </strong>
            <blockquote className="ml-2 mt-2 pl-4 mb-0 border-l text-neutral-500">{repo.description}</blockquote>
          </span>
        )}
      </div>
    </li>
  )
}