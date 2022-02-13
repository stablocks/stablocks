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
import DashboardLayout from 'src/layouts/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[AppProviderCell]}>
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />
        <Route path="/employee-login" page={EmployeeLoginPage} name="employeeLogin" />
        <Route path="/login" page={LoginPage} name="login" />

        <Set wrap={[ChatProvider]}>
          <Private unauthenticated="login">
            <Route path="/user-onboarding" page={UserOnboardingPage} name="userOnboarding" />

            <Set wrap={[DashboardLayout]}>
              <Route path="/profile" page={ProfilePage} name="profile" />

              <Private unauthenticated="home" role={['admin', 'employee']}>
                <Private unauthenticated="home" role={['admin', 'projectsAdmin', 'projects']}>
                  <Route path="/projects/tasks/{id}/edit" page={ProjectsTaskEditTaskPage} name="editTask" />
                  <Route path="/projects/tasks/{id}" page={ProjectsTaskTaskPage} name="task" />
                  <Route path="/projects/tasks" page={ProjectsTaskTasksPage} name="tasks" />
                  <Route path="/projects/{id}/edit" page={ProjectsProjectEditProjectPage} name="editProject" />
                  <Route path="/projects/{id}" page={ProjectsProjectProjectPage} name="project" />
                  <Route path="/projects" page={ProjectsProjectProjectsPage} name="projects" />
                </Private>

                <Private unauthenticated="home" role={['admin', 'helpdeskAdmin', 'helpdesk']}>
                  <Route path="/helpdesk/chat" page={HelpdeskChatChatPage} name="chat" />
                  <Route path="/helpdesk/tickets/{id:Int}/edit" page={HelpdeskTicketEditTicketPage} name="editTicket" />
                  <Route path="/helpdesk/tickets/{id:Int}" page={HelpdeskTicketTicketPage} name="ticket" />
                  <Route path="/helpdesk/tickets" page={HelpdeskTicketTicketsPage} name="tickets" />
                  <Route path="/helpdesk" page={HelpdeskHelpdeskPage} name="helpdesk" />
                </Private>

                <Private unauthenticated="home" role={['admin', 'financeAdmin', 'finance']}>
                  <Route path="/recruiting/applications" page={RecruitingApplicationApplicationsPage} name="applications" />
                  <Route path="/recruiting/jobs" page={RecruitingJobJobsPage} name="jobs" />
                  <Route path="/recruiting" page={RecruitingRecruitingPage} name="recruiting" />
                </Private>

                <Private unauthenticated="home" role={['admin', 'financeAdmin', 'finance']}>
                  <Route path="/finance/expenses" page={FinancesExpenseExpensesPage} name="expenses" />
                  <Route path="/finance/income" page={FinancesIncomeIncomesPage} name="incomes" />
                  <Route path="/finance/accounting" page={FinancesAccountingAccountingPage} name="accounting" />
                  <Route path="/finance" page={FinancesFinancePage} name="finance" />
                </Private>

                <Private unauthenticated="home" role={['admin', 'crmAdmin', 'crm']}>
                  <Route path="/contacts/companies" page={CRMCompanyCompaniesPage} name="companies" />
                  <Route path="/contacts" page={CRMContactContactsPage} name="contacts" />
                </Private>

                <Route path="/organization/departments" page={BasicsDepartmentDepartmentsPage} name="departments" />
                <Route path="/organization/employees/{id}/roles" page={EssentialsRoleRolesPage} name="employeeRoles" />
                <Route path="/organization/employees/{id}/edit" page={EssentialsUserEditUserPage} name="editEmployees" />
                <Route path="/organization/employees/{id}" page={EssentialsUserUserPage} name="employee" />
                <Route path="/organization/employees" page={EssentialsUserEmployeesPage} name="employees" />

                <Private unauthenticated="organization" role={['admin']}>
                  <Route path="/organization/settings" page={BasicsOrganizationOrganizationSettingsPage} name="organizationSettings" />
                </Private>

                <Route path="/organization" page={BasicsOrganizationOrganizationPage} name="organization" />
              </Private>

              <Route path="/" page={HomePage} name="home" />
            </Set>
          </Private>
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
