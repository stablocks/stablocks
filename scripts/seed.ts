import { db } from 'api/src/lib/db'
import { expenseCategories } from 'api/src/utils/seedData'

export default async () => {
  const createdExpenseCats = await db.expenseCategory.createMany({
    data: expenseCategories,
    skipDuplicates: true,
  })

  console.log(`Added expense categories: ${createdExpenseCats.count}`)
}
