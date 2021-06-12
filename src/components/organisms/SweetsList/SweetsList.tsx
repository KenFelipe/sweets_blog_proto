import { useEffect, useState } from 'react'
import * as Styled from './SweetsList.styled'

import { fetchSweets, fetchSweetsCount } from '@/api/fetchSweets'

import { SweetsCard } from '@/molecules/SweetsCard/SweetsCard'
import { TagList } from '@/molecules/TagList/TagList'
import { Pagination } from '@/molecules/Pagination/Pagination'

export type SweetsListProps = {
  category_title: string
  categories: {
    name: string
  }[]
}

export const SweetsList = ({
  category_title,
  categories,
}: SweetsListProps) => {
  const [sweets, setSweets] = useState([])

  const [activeCategory, setActiveCategory] = useState('all')

  const [perPage] = useState(6)
  const [maxPages, setMaxPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  // Init
  useEffect(() => {
    fetchSweetsCount().then(({ count }) => {
      setMaxPages(Math.ceil(count / perPage))
    })

    fetchSweets(perPage).then(({ data }) => {
      setSweets(data.sweets)
    })
  }, [perPage])

  // On Change Category
  useEffect(() => {
    const searchCategory =
      activeCategory !== 'all' && activeCategory

    fetchSweetsCount(searchCategory).then(({ count }) => {
      setMaxPages(Math.ceil(count / perPage))
    })
    fetchSweets(perPage, 0, searchCategory).then(({ data }) => {
      setSweets(data.sweets)
      setCurrentPage(1)
    })
  }, [perPage, activeCategory])

  // handle Pagination
  const getNextSweets = () => {
    fetchSweets(perPage, currentPage * perPage).then(
      ({ data }) => {
        setSweets(data.sweets)
        setCurrentPage(currentPage + 1)
      },
    )
  }

  const getPreviousSweets = () => {
    fetchSweets(perPage, (currentPage - 2) * perPage).then(
      ({ data }) => {
        setSweets(data.sweets)
        setCurrentPage(currentPage - 1)
      },
    )
  }

  return (
    <>
      <Styled.CategoriesWrapper>
        <h3>{category_title}</h3>
        <div>
          <TagList
            tagListData={[{ name: 'all' }, ...categories].map(
              category => ({
                onClick: () => setActiveCategory(category.name),
                active: category.name === activeCategory,
                children: category.name,
              }),
            )}
          />
        </div>
      </Styled.CategoriesWrapper>

      <Styled.SweetsWrapper>
        {sweets.map(({ name, price, image }, i) => (
          <SweetsCard
            key={i}
            name={name}
            price={price}
            imageUrl={image.url}
            href={image.url}
            isLink={true}
          />
        ))}
      </Styled.SweetsWrapper>

      <Styled.PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          maxPages={maxPages}
          onClickNext={getNextSweets}
          onClickPrev={getPreviousSweets}
        />
      </Styled.PaginationWrapper>
    </>
  )
}
