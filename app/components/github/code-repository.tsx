import { Repo } from "@/types/gitApi"
import { repoNameTitle } from "@/utils/gitApiUtils";
import { FaExternalLinkAlt } from "react-icons/fa";
import PlaceHolderComponent from "@/components/shared/placeholder";

type CodeRepositoryProps = {
  repo?: Repo
}

export default function CodeRepositoryComponent({ repo }: CodeRepositoryProps) {
  const blankCodeRepoCard = (
    <li className="list-group-item card w-80 max-w-80 lg:w-96 lg:max-w-96 rounded border-2">
      <h3 className="card-header border-0 bg-transparent">
        <PlaceHolderComponent columns={10} />
      </h3>
      <div className="card-body flex flex-col pt-0 ml-2">
        <span className="flex flex-row gap-2">
          <strong>Created: </strong>
          <PlaceHolderComponent columns={5} />
        </span>
        <span className="flex flex-row gap-2">
          <strong>Updated: </strong>
          <PlaceHolderComponent columns={5} />
        </span>
        <span className="flex flex-row gap-2">
          <strong>Language: </strong>
          <PlaceHolderComponent columns={7} />
        </span>
        <span className="flex flex-col gap-y-4 mb-4">
          <strong>Description: </strong>
          <PlaceHolderComponent />
        </span>
      </div>
    </li>
  )

  return !repo ? blankCodeRepoCard : (
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
          <strong>Updated: </strong>
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
            <blockquote className="text-black/50 pl-6 border-l-[5px] border-l-black/10 my-[1.2em]">{repo.description}</blockquote>
          </span>
        )}
      </div>
    </li>
  )
}