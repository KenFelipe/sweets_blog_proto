import * as Styled from './TagList.styled'
import { useState, useEffect, createRef } from 'react'

import { Tag, TagProps } from '@/atoms/Tag/Tag'

export type TagListProps = {
  tagListData: TagProps[]
}

export const TagList = ({ tagListData = [] }: TagListProps) => {
  const [tagRefs, setTagRefs] = useState(
    Array(tagListData.length),
  )
  useEffect(() => {
    setTagRefs(tagListData.map(() => createRef()))
  }, [tagListData])

  useEffect(() => {
    const handleOnResize = () => {
      tagRefs.forEach((_, i) => {
        if (i === 0) return
        if (!tagRefs[i].current) return

        tagRefs[i].current.getBoundingClientRect().top >
        tagRefs[i - 1].current.getBoundingClientRect().top
          ? tagRefs[i - 1].current.classList.add('prewraps')
          : tagRefs[i - 1].current.classList.remove('prewraps')
      })
    }
    handleOnResize()

    window.addEventListener('resize', handleOnResize)
  }, [tagRefs])

  return (
    <Styled.Container>
      {tagListData.map(
        ({ onClick, active, children, ...props }, i) => (
          <Tag
            key={i}
            ref={tagRefs[i]}
            onClick={onClick}
            active={active}
            {...props}
          >
            {children}
          </Tag>
        ),
      )}
    </Styled.Container>
  )
}
