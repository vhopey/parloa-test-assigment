import { List } from "antd"
import { Project } from "../../types"

import styles from "./ProjectIformation.module.css"

interface ProjectIformationProps {
  projects: Project[]
}

export default function ProjectIformation({
  projects,
}: ProjectIformationProps) {
  if (projects.length < 0) {
    return null
  }

  return (
    <div className={styles.wrapper} data-testid="projects-iformation-block">
      <span className={styles.title}> Projects: </span>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.contact} />
          </List.Item>
        )}
      />
    </div>
  )
}
