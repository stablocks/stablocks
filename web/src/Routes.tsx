// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import AppProviderCell from 'src/components/Providers/AppProviderCell'
import ChatProvider from 'src/components/Providers/ChatProvider'
import RedirectProvider from 'src/components/Providers/RedirectProvider'
import DashboardLayout from 'src/layouts/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[AppProviderCell]}>
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />
        <Route path="/login" page={LoginPage} name="login" prerender />

        <Set wrap={[ChatProvider]}>
          {/* REQUIRES AUTH */}
          <Private unauthenticated="login">
            <Route path="/user-onboarding" page={UserOnboardingPage} name="userOnboarding" />

            {/* Requires user to have given base info */}
            <Set wrap={[RedirectProvider, DashboardLayout]}>
              <Route path="/profile" page={ProfilePage} name="profile" />

              <Private unauthenticated="home" roles={['admin', 'employee']}>
                <Private unauthenticated="home" roles={['admin', 'projectsAdmin', 'projects']}>
                  <Route path="/projects/tasks/{id}/edit" page={ProjectsTaskEditTaskPage} name="editTask" />
                  <Route path="/projects/tasks/{id}" page={ProjectsTaskTaskPage} name="task" />
                  <Route path="/projects/tasks" page={ProjectsTaskTasksPage} name="tasks" />
                  <Route path="/projects/{id}/edit" page={ProjectsProjectEditProjectPage} name="editProject" />
                  <Route path="/projects/{id}" page={ProjectsProjectProjectPage} name="project" />
                  <Route path="/projects" page={ProjectsProjectProjectsPage} name="projects" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'helpdeskAdmin', 'helpdesk']}>
                  <Route path="/helpdesk/chat" page={HelpdeskChatChatPage} name="chat" />
                  <Route path="/helpdesk/tickets/{id:Int}/edit" page={HelpdeskTicketEditTicketPage} name="editTicket" />
                  <Route path="/helpdesk/tickets/{id:Int}" page={HelpdeskTicketTicketPage} name="ticket" />
                  <Route path="/helpdesk/tickets" page={HelpdeskTicketTicketsPage} name="tickets" />
                  <Route path="/helpdesk" page={HelpdeskHelpdeskPage} name="helpdesk" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'recruitingAdmin', 'recruiting']}>
                  <Route path="/recruiting/applications/{id}/edit" page={RecruitingApplicationEditApplicationPage} name="editApplication" />
                  <Route path="/recruiting/applications/{id}" page={RecruitingApplicationApplicationPage} name="application" />
                  <Route path="/recruiting/applications" page={RecruitingApplicationApplicationsPage} name="applications" />
                  <Route path="/recruiting/jobs/{id}/edit" page={RecruitingJobEditJobPage} name="editJob" />
                  <Route path="/recruiting/jobs/{id}" page={RecruitingJobJobPage} name="job" />
                  <Route path="/recruiting/jobs" page={RecruitingJobJobsPage} name="jobs" />
                  <Route path="/recruiting" page={RecruitingRecruitingPage} name="recruiting" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'financeAdmin', 'finance']}>
                  <Route path="/finance/invoices/{id:Int}/edit" page={FinancesInvoiceEditInvoicePage} name="editInvoice" />
                  <Route path="/finance/invoices/{id:Int}" page={FinancesInvoiceInvoicePage} name="invoice" />
                  <Route path="/finance/invoices" page={FinancesInvoiceInvoicesPage} name="invoices" />
                  <Route path="/finance/expenses/{id}/edit" page={FinancesExpenseEditExpensePage} name="editExpense" />
                  <Route path="/finance/expenses/{id}" page={FinancesExpenseExpensePage} name="expense" />
                  <Route path="/finance/expenses" page={FinancesExpenseExpensesPage} name="expenses" />
                  <Route path="/finance/income/{id}/edit" page={FinancesIncomeEditIncomePage} name="editIncome" />
                  <Route path="/finance/income/{id}" page={FinancesIncomeIncomePage} name="income" />
                  <Route path="/finance/income" page={FinancesIncomeIncomesPage} name="incomes" />
                  <Route path="/finance/accounting" page={FinancesAccountingAccountingPage} name="accounting" />
                  <Route path="/finance" page={FinancesFinancePage} name="finance" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'crmAdmin', 'crm']}>
                  <Route path="/contacts/companies/{id}/edit" page={CRMCompanyEditCompanyPage} name="editCompany" />
                  <Route path="/contacts/companies/{id}" page={CRMCompanyCompanyPage} name="company" />
                  <Route path="/contacts/companies" page={CRMCompanyCompaniesPage} name="companies" />
                  <Route path="/contacts/{id}/edit" page={CRMContactEditContactPage} name="editContact" />
                  <Route path="/contacts/{id}" page={CRMContactContactPage} name="contact" />
                  <Route path="/contacts" page={CRMContactContactsPage} name="contacts" />
                </Private>

                <Private unauthenticated="organization" roles={['admin', 'departmentAdmin']}>
                  <Route path="/organization/departments/{id}/edit" page={BasicsDepartmentEditDepartmentPage} name="editDepartment" />
                </Private>

                <Route path="/organization/departments/{id}" page={BasicsDepartmentDepartmentPage} name="department" />
                <Route path="/organization/departments" page={BasicsDepartmentDepartmentsPage} name="departments" />

                <Private unauthenticated="employees" roles={['admin']}>
                  <Route path="/organization/employees/{id}/roles" page={BasicsEmployeeEmployeeRolesPage} name="employeeRoles" />
                </Private>

                <Route path="/organization/employees/{id}/edit" page={BasicsEmployeeEditEmployeePage} name="editEmployee" />
                <Route path="/organization/employees/{id}" page={BasicsEmployeeEmployeePage} name="employee" />
                <Route path="/organization/employees" page={BasicsEmployeeEmployeesPage} name="employees" />

                <Private unauthenticated="organization" roles={['admin']}>
                  <Route path="/organization/settings" page={BasicsOrganizationOrganizationSettingsPage} name="organizationSettings" />
                </Private>

                <Route path="/organization" page={BasicsOrganizationOrganizationPage} name="organization" />
              </Private>

              <Route path="/" page={HomePage} name="home" />
            </Set>
          </Private>
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
