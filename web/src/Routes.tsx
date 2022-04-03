// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import AppProviderCell from 'src/components/AppCells/AppProviderCell'
import ChatLayout from 'src/layouts/ChatLayout'
import DashboardLayout from 'src/layouts/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[AppProviderCell]}>
        <Route path="/setup" page={SetupPage} name="setup" />
        <Route path="/login" page={LoginPage} name="login" prerender />

        <Set wrap={[ChatLayout]}>
          {/* REQUIRES AUTH */}
          <Private unauthenticated="login">
            <Route path="/onboarding" page={OnboardingPage} name="onboarding" />

            {/* Requires user to have been onboarded */}
            <Set wrap={[DashboardLayout]}>
              <Route path="/profile" page={ProfilePage} name="profile" />

              <Private unauthenticated="home" roles={['admin', 'employee']}>
                <Private unauthenticated="home" roles={['admin', 'projectsAdmin', 'projects']}>
                  <Route path="/projects/tasks/{id}/edit" page={ModulesProjectsTaskEditTaskPage} name="editTask" />
                  <Route path="/projects/tasks/{id}" page={ModulesProjectsTaskTaskPage} name="task" />
                  <Route path="/projects/tasks" page={ModulesProjectsTaskTasksPage} name="tasks" />
                  <Route path="/projects/{id}/edit" page={ModulesProjectsProjectEditProjectPage} name="editProject" />
                  <Route path="/projects/{id}" page={ModulesProjectsProjectProjectPage} name="project" />
                  <Route path="/projects" page={ModulesProjectsProjectProjectsPage} name="projects" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'helpdeskAdmin', 'helpdesk']}>
                  <Route path="/helpdesk/chat" page={ModulesHelpdeskChatChatPage} name="chat" />
                  <Route path="/helpdesk/tickets/{id:Int}/edit" page={ModulesHelpdeskTicketEditTicketPage} name="editTicket" />
                  <Route path="/helpdesk/tickets/{id:Int}" page={ModulesHelpdeskTicketTicketPage} name="ticket" />
                  <Route path="/helpdesk/tickets" page={ModulesHelpdeskTicketTicketsPage} name="tickets" />
                  <Route path="/helpdesk" page={ModulesHelpdeskHelpdeskPage} name="helpdesk" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'recruitingAdmin', 'recruiting']}>
                  <Route path="/recruiting/applications/{id}/edit" page={ModulesRecruitingApplicationEditApplicationPage} name="editApplication" />
                  <Route path="/recruiting/applications/{id}" page={ModulesRecruitingApplicationApplicationPage} name="application" />
                  <Route path="/recruiting/applications" page={ModulesRecruitingApplicationApplicationsPage} name="applications" />
                  <Route path="/recruiting/jobs/{id}/edit" page={ModulesRecruitingJobEditJobPage} name="editJob" />
                  <Route path="/recruiting/jobs/{id}" page={ModulesRecruitingJobJobPage} name="job" />
                  <Route path="/recruiting/jobs" page={ModulesRecruitingJobJobsPage} name="jobs" />
                  <Route path="/recruiting" page={ModulesRecruitingRecruitingPage} name="recruiting" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'financeAdmin', 'finance']}>
                  <Route path="/finance/invoices/{id:Int}/edit" page={ModulesFinancesInvoiceEditInvoicePage} name="editInvoice" />
                  <Route path="/finance/invoices/{id:Int}" page={ModulesFinancesInvoiceInvoicePage} name="invoice" />
                  <Route path="/finance/invoices" page={ModulesFinancesInvoiceInvoicesPage} name="invoices" />
                  <Route path="/finance/expenses/{id}/edit" page={ModulesFinancesExpenseEditExpensePage} name="editExpense" />
                  <Route path="/finance/expenses/{id}" page={ModulesFinancesExpenseExpensePage} name="expense" />
                  <Route path="/finance/expenses" page={ModulesFinancesExpenseExpensesPage} name="expenses" />
                  <Route path="/finance/income/{id}/edit" page={ModulesFinancesIncomeEditIncomePage} name="editIncome" />
                  <Route path="/finance/income/{id}" page={ModulesFinancesIncomeIncomePage} name="income" />
                  <Route path="/finance/income" page={ModulesFinancesIncomeIncomesPage} name="incomes" />
                  <Route path="/finance/accounting" page={ModulesFinancesAccountingAccountingPage} name="accounting" />
                  <Route path="/finance" page={ModulesFinancesFinancePage} name="finance" />
                </Private>

                <Private unauthenticated="home" roles={['admin', 'crmAdmin', 'crm']}>
                  <Route path="/contacts/companies/{id}/edit" page={ModulesCRMCompanyEditCompanyPage} name="editCompany" />
                  <Route path="/contacts/companies/{id}" page={ModulesCRMCompanyCompanyPage} name="company" />
                  <Route path="/contacts/companies" page={ModulesCRMCompanyCompaniesPage} name="companies" />
                  <Route path="/contacts/{id}/edit" page={ModulesCRMContactEditContactPage} name="editContact" />
                  <Route path="/contacts/{id}" page={ModulesCRMContactContactPage} name="contact" />
                  <Route path="/contacts" page={ModulesCRMContactContactsPage} name="contacts" />
                </Private>

                <Private unauthenticated="organization" roles={['admin', 'departmentAdmin']}>
                  <Route path="/organization/departments/{id}/edit" page={ModulesEssentialsDepartmentEditDepartmentPage} name="editDepartment" />
                </Private>

                <Route path="/organization/departments/{id}" page={ModulesEssentialsDepartmentDepartmentPage} name="department" />
                <Route path="/organization/departments" page={ModulesEssentialsDepartmentDepartmentsPage} name="departments" />

                <Private unauthenticated="employees" roles={['admin']}>
                  <Route path="/organization/employees/{id}/roles" page={ModulesEssentialsEmployeeEmployeeRolesPage} name="employeeRoles" />
                </Private>

                <Route path="/organization/employees/{id}/edit" page={ModulesEssentialsEmployeeEditEmployeePage} name="editEmployee" />
                <Route path="/organization/employees/{id}" page={ModulesEssentialsEmployeeEmployeePage} name="employee" />
                <Route path="/organization/employees" page={ModulesEssentialsEmployeeEmployeesPage} name="employees" />

                <Private unauthenticated="organization" roles={['admin']}>
                  <Route path="/organization/settings" page={ModulesEssentialsOrganizationOrganizationSettingsPage} name="organizationSettings" />
                </Private>

                <Route path="/organization" page={ModulesEssentialsOrganizationOrganizationPage} name="organization" />
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
