import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthModel = {
  __typename?: 'AuthModel';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: UserModel;
};

export type CertificateHistoryInput = {
  certificateId: Scalars['String']['input'];
  finishDate: Scalars['DateTime']['input'];
  healthGroupId?: InputMaybe<Scalars['String']['input']>;
  physicalEducationId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
};

export type CertificateHistoryModel = {
  __typename?: 'CertificateHistoryModel';
  certificate: CertificateModel;
  certificateId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  finishDate: Scalars['DateTime']['output'];
  healthGroup?: Maybe<HealthGroupModel>;
  healthGroupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  physicalEducation?: Maybe<PhysicalEducationModel>;
  physicalEducationId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CertificateInput = {
  finishDate: Scalars['DateTime']['input'];
  healthGroupId: Scalars['String']['input'];
  physicalEducationId: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
  studentId: Scalars['String']['input'];
};

export type CertificateModel = {
  __typename?: 'CertificateModel';
  finishDate: Scalars['DateTime']['output'];
  healthGroup: HealthGroupModel;
  healthGroupId: Scalars['String']['output'];
  physicalEducation: PhysicalEducationModel;
  physicalEducationId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  student: StudentModel;
  studentId: Scalars['String']['output'];
};

export type CertificateParamsInput = {
  courseNumber?: InputMaybe<Scalars['Float']['input']>;
  departmentTitle?: InputMaybe<Scalars['String']['input']>;
  finishDate?: InputMaybe<Scalars['DateTime']['input']>;
  groupTitle?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  orderBy?: Scalars['String']['input'];
  page?: Scalars['Float']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CourseInput = {
  departmentId: Scalars['String']['input'];
  number: Scalars['Float']['input'];
};

export type CourseModel = {
  __typename?: 'CourseModel';
  createdAt: Scalars['DateTime']['output'];
  department: DepartmentModel;
  departmentId: Scalars['String']['output'];
  groups?: Maybe<Array<GroupModel>>;
  id: Scalars['String']['output'];
  number: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CourseParamsInput = {
  departmentTitle?: InputMaybe<Scalars['String']['input']>;
  orderBy?: Scalars['String']['input'];
};

export type DepartmentInput = {
  title: Scalars['String']['input'];
};

export type DepartmentModel = {
  __typename?: 'DepartmentModel';
  courses?: Maybe<Array<CourseModel>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DepartmentParamsInput = {
  orderBy?: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GroupInput = {
  courseId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type GroupModel = {
  __typename?: 'GroupModel';
  course?: Maybe<CourseModel>;
  courseId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupParamsInput = {
  courseNumber?: InputMaybe<Scalars['Float']['input']>;
  departmentTitle?: InputMaybe<Scalars['String']['input']>;
  orderBy?: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HealthGroupInput = {
  title: Scalars['String']['input'];
};

export type HealthGroupModel = {
  __typename?: 'HealthGroupModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HealthGroupParamsInput = {
  orderBy?: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserModel;
  createCertificate: CertificateModel;
  createCertificateHistory: CertificateHistoryModel;
  createCourse: CourseModel;
  createDepartment: DepartmentModel;
  createGroup: GroupModel;
  createHealthGroup: HealthGroupModel;
  createPhysicalEducation: PhysicalEducationModel;
  createStudent: StudentModel;
  createStudentHistory: StudentHistoryModel;
  getNewTokens: AuthModel;
  login: AuthModel;
  logout: Scalars['Boolean']['output'];
  register: AuthModel;
  removeCertificate: Scalars['Boolean']['output'];
  removeCourse: Scalars['Boolean']['output'];
  removeDepartment: Scalars['Boolean']['output'];
  removeGroup: Scalars['Boolean']['output'];
  removeHealthGroup: Scalars['Boolean']['output'];
  removeManyCertificates: Scalars['Boolean']['output'];
  removeManyCourses: Scalars['Boolean']['output'];
  removeManyDepartments: Scalars['Boolean']['output'];
  removeManyGroups: Scalars['Boolean']['output'];
  removeManyHealthGroups: Scalars['Boolean']['output'];
  removeManyPhysicalEducations: Scalars['Boolean']['output'];
  removeManyStudents: Scalars['Boolean']['output'];
  removePhysicalEducation: Scalars['Boolean']['output'];
  removeStudent: Scalars['Boolean']['output'];
  removeUser: Scalars['Boolean']['output'];
  updateCertificate: CertificateModel;
  updateCourse: CourseModel;
  updateDepartment: DepartmentModel;
  updateGroup: GroupModel;
  updateHealthGroup: HealthGroupModel;
  updatePhysicalEducation: PhysicalEducationModel;
  updateStudent: StudentModel;
  updateUser: UserModel;
};


export type MutationChangePasswordArgs = {
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCreateCertificateArgs = {
  data: CertificateInput;
};


export type MutationCreateCertificateHistoryArgs = {
  data: CertificateHistoryInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentInput;
};


export type MutationCreateGroupArgs = {
  data: GroupInput;
};


export type MutationCreateHealthGroupArgs = {
  data: HealthGroupInput;
};


export type MutationCreatePhysicalEducationArgs = {
  data: PhysicalEducationInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateStudentHistoryArgs = {
  data: StudentHistoryInput;
};


export type MutationGetNewTokensArgs = {
  refreshToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationRemoveCertificateArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveCourseArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveDepartmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveHealthGroupArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveManyCertificatesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemoveManyCoursesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemoveManyDepartmentsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemoveManyGroupsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemoveManyHealthGroupsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemoveManyPhysicalEducationsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemoveManyStudentsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationRemovePhysicalEducationArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveStudentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCertificateArgs = {
  data: UpdateCertificateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCourseArgs = {
  data: UpdateCourseInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateGroupArgs = {
  data: GroupInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateHealthGroupArgs = {
  data: HealthGroupInput;
  id: Scalars['String']['input'];
};


export type MutationUpdatePhysicalEducationArgs = {
  data: PhysicalEducationInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateStudentArgs = {
  data: UpdateStudentInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  id: Scalars['String']['input'];
};

export type PhysicalEducationInput = {
  title: Scalars['String']['input'];
};

export type PhysicalEducationModel = {
  __typename?: 'PhysicalEducationModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PhysicalEducationParamsInput = {
  orderBy?: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getAllCertificateHistories: Array<CertificateHistoryModel>;
  getAllCertificates: Array<CertificateModel>;
  getAllCourses: Array<CourseModel>;
  getAllDepartments: Array<DepartmentModel>;
  getAllGroups: Array<GroupModel>;
  getAllHealthGroups: Array<HealthGroupModel>;
  getAllPhysicalEducations: Array<PhysicalEducationModel>;
  getAllStudentHistories: Array<StudentHistoryModel>;
  getAllStudents: Array<StudentModel>;
  getCertificateById: CertificateModel;
  getCourseById: CourseModel;
  getDepartmentById: DepartmentModel;
  getDepartmentByTitle: DepartmentModel;
  getGroupById: GroupModel;
  getGroupByTitle: GroupModel;
  getHealthGroupById: HealthGroupModel;
  getHealthGroupByTitle: HealthGroupModel;
  getPhysicalEducationById: PhysicalEducationModel;
  getPhysicalEducationByTitle: PhysicalEducationModel;
  getProfile: UserModel;
  getStudentById: StudentModel;
  getUserByLogin: UserModel;
};


export type QueryGetAllCertificateHistoriesArgs = {
  certificateId: Scalars['String']['input'];
};


export type QueryGetAllCertificatesArgs = {
  params: CertificateParamsInput;
};


export type QueryGetAllCoursesArgs = {
  params: CourseParamsInput;
};


export type QueryGetAllDepartmentsArgs = {
  params: DepartmentParamsInput;
};


export type QueryGetAllGroupsArgs = {
  params: GroupParamsInput;
};


export type QueryGetAllHealthGroupsArgs = {
  params: HealthGroupParamsInput;
};


export type QueryGetAllPhysicalEducationsArgs = {
  params: PhysicalEducationParamsInput;
};


export type QueryGetAllStudentHistoriesArgs = {
  studentId: Scalars['String']['input'];
};


export type QueryGetAllStudentsArgs = {
  params: StudentParamsInput;
};


export type QueryGetCertificateByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCourseByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDepartmentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDepartmentByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryGetGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetGroupByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryGetHealthGroupByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetHealthGroupByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryGetPhysicalEducationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPhysicalEducationByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryGetStudentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByLoginArgs = {
  login: Scalars['String']['input'];
};

export type RegisterInput = {
  isAdmin: Scalars['Boolean']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type StudentHistoryInput = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  studentId: Scalars['String']['input'];
};

export type StudentHistoryModel = {
  __typename?: 'StudentHistoryModel';
  createdAt: Scalars['DateTime']['output'];
  group?: Maybe<GroupModel>;
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  student: GroupModel;
  studentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StudentInput = {
  birthDate: Scalars['DateTime']['input'];
  firstName: Scalars['String']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  isExpelled?: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  secondName?: InputMaybe<Scalars['String']['input']>;
};

export type StudentModel = {
  __typename?: 'StudentModel';
  birthDate: Scalars['DateTime']['output'];
  certificates?: Maybe<Array<CertificateModel>>;
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  group?: Maybe<GroupModel>;
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isExpelled: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  secondName?: Maybe<Scalars['String']['output']>;
  studentHistories?: Maybe<Array<StudentHistoryModel>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type StudentParamsInput = {
  courseNumber?: InputMaybe<Scalars['Float']['input']>;
  departmentTitle?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  groupTitle?: InputMaybe<Scalars['String']['input']>;
  isExpelled?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  orderBy?: Scalars['String']['input'];
  page?: Scalars['Float']['input'];
};

export type UpdateCertificateInput = {
  finishDate?: InputMaybe<Scalars['DateTime']['input']>;
  healthGroupId?: InputMaybe<Scalars['String']['input']>;
  physicalEducationId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  studentId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCourseInput = {
  departmentId?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateStudentInput = {
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  isExpelled?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  secondName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthModel', accessToken: string, refreshToken: string, user: { __typename?: 'UserModel', id: string, login: string, isAdmin: boolean } } };

export type CreateCertificateMutationVariables = Exact<{
  data: CertificateInput;
}>;


export type CreateCertificateMutation = { __typename?: 'Mutation', createCertificate: { __typename?: 'CertificateModel', startDate: any, finishDate: any, studentId: string, healthGroupId: string, physicalEducationId: string } };

export type RemoveCertificateMutationVariables = Exact<{
  removeCertificateId: Scalars['String']['input'];
}>;


export type RemoveCertificateMutation = { __typename?: 'Mutation', removeCertificate: boolean };

export type UpdateCertificateMutationVariables = Exact<{
  data: UpdateCertificateInput;
  updateCertificateId: Scalars['String']['input'];
}>;


export type UpdateCertificateMutation = { __typename?: 'Mutation', updateCertificate: { __typename?: 'CertificateModel', startDate: any, finishDate: any, studentId: string, healthGroupId: string, physicalEducationId: string } };

export type CreateCourseMutationVariables = Exact<{
  data: CourseInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'CourseModel', id: string, number: number, departmentId: string } };

export type RemoveCourseMutationVariables = Exact<{
  removeCourseId: Scalars['String']['input'];
}>;


export type RemoveCourseMutation = { __typename?: 'Mutation', removeCourse: boolean };

export type UpdateCourseMutationVariables = Exact<{
  data: UpdateCourseInput;
  updateCourseId: Scalars['String']['input'];
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'CourseModel', id: string, number: number, departmentId: string } };

export type CreateDepartmentMutationVariables = Exact<{
  data: DepartmentInput;
}>;


export type CreateDepartmentMutation = { __typename?: 'Mutation', createDepartment: { __typename?: 'DepartmentModel', id: string, title: string } };

export type RemoveDepartmentMutationVariables = Exact<{
  removeDepartmentId: Scalars['String']['input'];
}>;


export type RemoveDepartmentMutation = { __typename?: 'Mutation', removeDepartment: boolean };

export type RemoveManyDepartmentsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyDepartmentsMutation = { __typename?: 'Mutation', removeManyDepartments: boolean };

export type UpdateDepartmentMutationVariables = Exact<{
  data: DepartmentInput;
  updateDepartmentId: Scalars['String']['input'];
}>;


export type UpdateDepartmentMutation = { __typename?: 'Mutation', updateDepartment: { __typename?: 'DepartmentModel', id: string, title: string } };

export type CreateGroupMutationVariables = Exact<{
  data: GroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup: { __typename?: 'GroupModel', id: string, title: string, courseId?: string | null } };

export type RemoveGroupMutationVariables = Exact<{
  removeGroupId: Scalars['String']['input'];
}>;


export type RemoveGroupMutation = { __typename?: 'Mutation', removeGroup: boolean };

export type UpdateGroupMutationVariables = Exact<{
  data: GroupInput;
  updateGroupId: Scalars['String']['input'];
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup: { __typename?: 'GroupModel', id: string, title: string, courseId?: string | null } };

export type CreateHealthGroupMutationVariables = Exact<{
  data: HealthGroupInput;
}>;


export type CreateHealthGroupMutation = { __typename?: 'Mutation', createHealthGroup: { __typename?: 'HealthGroupModel', id: string, title: string } };

export type RemoveHealthGroupMutationVariables = Exact<{
  removeHealthGroupId: Scalars['String']['input'];
}>;


export type RemoveHealthGroupMutation = { __typename?: 'Mutation', removeHealthGroup: boolean };

export type UpdateHealthGroupMutationVariables = Exact<{
  data: HealthGroupInput;
  updateHealthGroupId: Scalars['String']['input'];
}>;


export type UpdateHealthGroupMutation = { __typename?: 'Mutation', updateHealthGroup: { __typename?: 'HealthGroupModel', id: string, title: string } };

export type CreatePhysicalEducationMutationVariables = Exact<{
  data: PhysicalEducationInput;
}>;


export type CreatePhysicalEducationMutation = { __typename?: 'Mutation', createPhysicalEducation: { __typename?: 'PhysicalEducationModel', id: string, title: string } };

export type RemovePhysicalEducationMutationVariables = Exact<{
  removePhysicalEducationId: Scalars['String']['input'];
}>;


export type RemovePhysicalEducationMutation = { __typename?: 'Mutation', removePhysicalEducation: boolean };

export type UpdatePhysicalEducationMutationVariables = Exact<{
  data: PhysicalEducationInput;
  updatePhysicalEducationId: Scalars['String']['input'];
}>;


export type UpdatePhysicalEducationMutation = { __typename?: 'Mutation', updatePhysicalEducation: { __typename?: 'PhysicalEducationModel', id: string, title: string } };

export type CreateStudentMutationVariables = Exact<{
  data: StudentInput;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'StudentModel', firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean, groupId?: string | null } };

export type RemoveManyStudentsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyStudentsMutation = { __typename?: 'Mutation', removeManyStudents: boolean };

export type RemoveStudentMutationVariables = Exact<{
  removeStudentId: Scalars['String']['input'];
}>;


export type RemoveStudentMutation = { __typename?: 'Mutation', removeStudent: boolean };

export type UpdateStudentMutationVariables = Exact<{
  data: UpdateStudentInput;
  updateStudentId: Scalars['String']['input'];
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'StudentModel', firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean, groupId?: string | null } };

export type GetAllCoursesQueryVariables = Exact<{
  params: CourseParamsInput;
}>;


export type GetAllCoursesQuery = { __typename?: 'Query', getAllCourses: Array<{ __typename?: 'CourseModel', id: string, number: number, department: { __typename?: 'DepartmentModel', id: string, title: string } }> };

export type GetCourseByIdQueryVariables = Exact<{
  getCourseById: Scalars['String']['input'];
}>;


export type GetCourseByIdQuery = { __typename?: 'Query', getCourseById: { __typename?: 'CourseModel', id: string, number: number, department: { __typename?: 'DepartmentModel', id: string, title: string } } };

export type GetAllDepartmentsQueryVariables = Exact<{
  params: DepartmentParamsInput;
}>;


export type GetAllDepartmentsQuery = { __typename?: 'Query', getAllDepartments: Array<{ __typename?: 'DepartmentModel', id: string, title: string, courses?: Array<{ __typename?: 'CourseModel', id: string, number: number }> | null }> };

export type GetDepartmentByIdQueryVariables = Exact<{
  getDepartmentById: Scalars['String']['input'];
}>;


export type GetDepartmentByIdQuery = { __typename?: 'Query', getDepartmentById: { __typename?: 'DepartmentModel', id: string, title: string, courses?: Array<{ __typename?: 'CourseModel', id: string, number: number }> | null } };

export type GetAllGroupsQueryVariables = Exact<{
  params: GroupParamsInput;
}>;


export type GetAllGroupsQuery = { __typename?: 'Query', getAllGroups: Array<{ __typename?: 'GroupModel', id: string, title: string, course?: { __typename?: 'CourseModel', id: string, number: number, department: { __typename?: 'DepartmentModel', id: string, title: string } } | null }> };

export type GetGroupByIdQueryVariables = Exact<{
  getGroupByIdId: Scalars['String']['input'];
}>;


export type GetGroupByIdQuery = { __typename?: 'Query', getGroupById: { __typename?: 'GroupModel', id: string, title: string, course?: { __typename?: 'CourseModel', id: string, number: number, departmentId: string } | null } };

export type GetAllHealthGroupsQueryVariables = Exact<{
  params: HealthGroupParamsInput;
}>;


export type GetAllHealthGroupsQuery = { __typename?: 'Query', getAllHealthGroups: Array<{ __typename?: 'HealthGroupModel', id: string, title: string }> };

export type GetHealthGroupByIdQueryVariables = Exact<{
  getHealthGroupByIdId: Scalars['String']['input'];
}>;


export type GetHealthGroupByIdQuery = { __typename?: 'Query', getHealthGroupById: { __typename?: 'HealthGroupModel', id: string } };

export type GetAllPhysicalEducationsQueryVariables = Exact<{
  params: PhysicalEducationParamsInput;
}>;


export type GetAllPhysicalEducationsQuery = { __typename?: 'Query', getAllPhysicalEducations: Array<{ __typename?: 'PhysicalEducationModel', id: string, title: string }> };

export type GetPhysicalEducationByTitleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type GetPhysicalEducationByTitleQuery = { __typename?: 'Query', getPhysicalEducationByTitle: { __typename?: 'PhysicalEducationModel', id: string, title: string } };

export type GetAllStudentsQueryVariables = Exact<{
  params: StudentParamsInput;
}>;


export type GetAllStudentsQuery = { __typename?: 'Query', getAllStudents: Array<{ __typename?: 'StudentModel', firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean, group?: { __typename?: 'GroupModel', id: string, title: string, course?: { __typename?: 'CourseModel', id: string, number: number, department: { __typename?: 'DepartmentModel', id: string, title: string } } | null } | null }> };


export const LoginDocument = gql`
    mutation login($data: LoginInput!) {
  login(data: $data) {
    accessToken
    refreshToken
    user {
      id
      login
      isAdmin
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateCertificateDocument = gql`
    mutation CreateCertificate($data: CertificateInput!) {
  createCertificate(data: $data) {
    startDate
    finishDate
    studentId
    healthGroupId
    physicalEducationId
  }
}
    `;
export type CreateCertificateMutationFn = Apollo.MutationFunction<CreateCertificateMutation, CreateCertificateMutationVariables>;

/**
 * __useCreateCertificateMutation__
 *
 * To run a mutation, you first call `useCreateCertificateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCertificateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCertificateMutation, { data, loading, error }] = useCreateCertificateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCertificateMutation(baseOptions?: Apollo.MutationHookOptions<CreateCertificateMutation, CreateCertificateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCertificateMutation, CreateCertificateMutationVariables>(CreateCertificateDocument, options);
      }
export type CreateCertificateMutationHookResult = ReturnType<typeof useCreateCertificateMutation>;
export type CreateCertificateMutationResult = Apollo.MutationResult<CreateCertificateMutation>;
export type CreateCertificateMutationOptions = Apollo.BaseMutationOptions<CreateCertificateMutation, CreateCertificateMutationVariables>;
export const RemoveCertificateDocument = gql`
    mutation RemoveCertificate($removeCertificateId: String!) {
  removeCertificate(id: $removeCertificateId)
}
    `;
export type RemoveCertificateMutationFn = Apollo.MutationFunction<RemoveCertificateMutation, RemoveCertificateMutationVariables>;

/**
 * __useRemoveCertificateMutation__
 *
 * To run a mutation, you first call `useRemoveCertificateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCertificateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCertificateMutation, { data, loading, error }] = useRemoveCertificateMutation({
 *   variables: {
 *      removeCertificateId: // value for 'removeCertificateId'
 *   },
 * });
 */
export function useRemoveCertificateMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCertificateMutation, RemoveCertificateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCertificateMutation, RemoveCertificateMutationVariables>(RemoveCertificateDocument, options);
      }
export type RemoveCertificateMutationHookResult = ReturnType<typeof useRemoveCertificateMutation>;
export type RemoveCertificateMutationResult = Apollo.MutationResult<RemoveCertificateMutation>;
export type RemoveCertificateMutationOptions = Apollo.BaseMutationOptions<RemoveCertificateMutation, RemoveCertificateMutationVariables>;
export const UpdateCertificateDocument = gql`
    mutation UpdateCertificate($data: UpdateCertificateInput!, $updateCertificateId: String!) {
  updateCertificate(data: $data, id: $updateCertificateId) {
    startDate
    finishDate
    studentId
    healthGroupId
    physicalEducationId
  }
}
    `;
export type UpdateCertificateMutationFn = Apollo.MutationFunction<UpdateCertificateMutation, UpdateCertificateMutationVariables>;

/**
 * __useUpdateCertificateMutation__
 *
 * To run a mutation, you first call `useUpdateCertificateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCertificateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCertificateMutation, { data, loading, error }] = useUpdateCertificateMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateCertificateId: // value for 'updateCertificateId'
 *   },
 * });
 */
export function useUpdateCertificateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCertificateMutation, UpdateCertificateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCertificateMutation, UpdateCertificateMutationVariables>(UpdateCertificateDocument, options);
      }
export type UpdateCertificateMutationHookResult = ReturnType<typeof useUpdateCertificateMutation>;
export type UpdateCertificateMutationResult = Apollo.MutationResult<UpdateCertificateMutation>;
export type UpdateCertificateMutationOptions = Apollo.BaseMutationOptions<UpdateCertificateMutation, UpdateCertificateMutationVariables>;
export const CreateCourseDocument = gql`
    mutation createCourse($data: CourseInput!) {
  createCourse(data: $data) {
    id
    number
    departmentId
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const RemoveCourseDocument = gql`
    mutation removeCourse($removeCourseId: String!) {
  removeCourse(id: $removeCourseId)
}
    `;
export type RemoveCourseMutationFn = Apollo.MutationFunction<RemoveCourseMutation, RemoveCourseMutationVariables>;

/**
 * __useRemoveCourseMutation__
 *
 * To run a mutation, you first call `useRemoveCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCourseMutation, { data, loading, error }] = useRemoveCourseMutation({
 *   variables: {
 *      removeCourseId: // value for 'removeCourseId'
 *   },
 * });
 */
export function useRemoveCourseMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCourseMutation, RemoveCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCourseMutation, RemoveCourseMutationVariables>(RemoveCourseDocument, options);
      }
export type RemoveCourseMutationHookResult = ReturnType<typeof useRemoveCourseMutation>;
export type RemoveCourseMutationResult = Apollo.MutationResult<RemoveCourseMutation>;
export type RemoveCourseMutationOptions = Apollo.BaseMutationOptions<RemoveCourseMutation, RemoveCourseMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation updateCourse($data: UpdateCourseInput!, $updateCourseId: String!) {
  updateCourse(data: $data, id: $updateCourseId) {
    id
    number
    departmentId
  }
}
    `;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateCourseId: // value for 'updateCourseId'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const CreateDepartmentDocument = gql`
    mutation createDepartment($data: DepartmentInput!) {
  createDepartment(data: $data) {
    id
    title
  }
}
    `;
export type CreateDepartmentMutationFn = Apollo.MutationFunction<CreateDepartmentMutation, CreateDepartmentMutationVariables>;

/**
 * __useCreateDepartmentMutation__
 *
 * To run a mutation, you first call `useCreateDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDepartmentMutation, { data, loading, error }] = useCreateDepartmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDepartmentMutation, CreateDepartmentMutationVariables>(CreateDepartmentDocument, options);
      }
export type CreateDepartmentMutationHookResult = ReturnType<typeof useCreateDepartmentMutation>;
export type CreateDepartmentMutationResult = Apollo.MutationResult<CreateDepartmentMutation>;
export type CreateDepartmentMutationOptions = Apollo.BaseMutationOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export const RemoveDepartmentDocument = gql`
    mutation removeDepartment($removeDepartmentId: String!) {
  removeDepartment(id: $removeDepartmentId)
}
    `;
export type RemoveDepartmentMutationFn = Apollo.MutationFunction<RemoveDepartmentMutation, RemoveDepartmentMutationVariables>;

/**
 * __useRemoveDepartmentMutation__
 *
 * To run a mutation, you first call `useRemoveDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDepartmentMutation, { data, loading, error }] = useRemoveDepartmentMutation({
 *   variables: {
 *      removeDepartmentId: // value for 'removeDepartmentId'
 *   },
 * });
 */
export function useRemoveDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDepartmentMutation, RemoveDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDepartmentMutation, RemoveDepartmentMutationVariables>(RemoveDepartmentDocument, options);
      }
export type RemoveDepartmentMutationHookResult = ReturnType<typeof useRemoveDepartmentMutation>;
export type RemoveDepartmentMutationResult = Apollo.MutationResult<RemoveDepartmentMutation>;
export type RemoveDepartmentMutationOptions = Apollo.BaseMutationOptions<RemoveDepartmentMutation, RemoveDepartmentMutationVariables>;
export const RemoveManyDepartmentsDocument = gql`
    mutation removeManyDepartments($ids: [String!]!) {
  removeManyDepartments(ids: $ids)
}
    `;
export type RemoveManyDepartmentsMutationFn = Apollo.MutationFunction<RemoveManyDepartmentsMutation, RemoveManyDepartmentsMutationVariables>;

/**
 * __useRemoveManyDepartmentsMutation__
 *
 * To run a mutation, you first call `useRemoveManyDepartmentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyDepartmentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyDepartmentsMutation, { data, loading, error }] = useRemoveManyDepartmentsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyDepartmentsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyDepartmentsMutation, RemoveManyDepartmentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyDepartmentsMutation, RemoveManyDepartmentsMutationVariables>(RemoveManyDepartmentsDocument, options);
      }
export type RemoveManyDepartmentsMutationHookResult = ReturnType<typeof useRemoveManyDepartmentsMutation>;
export type RemoveManyDepartmentsMutationResult = Apollo.MutationResult<RemoveManyDepartmentsMutation>;
export type RemoveManyDepartmentsMutationOptions = Apollo.BaseMutationOptions<RemoveManyDepartmentsMutation, RemoveManyDepartmentsMutationVariables>;
export const UpdateDepartmentDocument = gql`
    mutation updateDepartment($data: DepartmentInput!, $updateDepartmentId: String!) {
  updateDepartment(data: $data, id: $updateDepartmentId) {
    id
    title
  }
}
    `;
export type UpdateDepartmentMutationFn = Apollo.MutationFunction<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>;

/**
 * __useUpdateDepartmentMutation__
 *
 * To run a mutation, you first call `useUpdateDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDepartmentMutation, { data, loading, error }] = useUpdateDepartmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateDepartmentId: // value for 'updateDepartmentId'
 *   },
 * });
 */
export function useUpdateDepartmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>(UpdateDepartmentDocument, options);
      }
export type UpdateDepartmentMutationHookResult = ReturnType<typeof useUpdateDepartmentMutation>;
export type UpdateDepartmentMutationResult = Apollo.MutationResult<UpdateDepartmentMutation>;
export type UpdateDepartmentMutationOptions = Apollo.BaseMutationOptions<UpdateDepartmentMutation, UpdateDepartmentMutationVariables>;
export const CreateGroupDocument = gql`
    mutation createGroup($data: GroupInput!) {
  createGroup(data: $data) {
    id
    title
    courseId
  }
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const RemoveGroupDocument = gql`
    mutation removeGroup($removeGroupId: String!) {
  removeGroup(id: $removeGroupId)
}
    `;
export type RemoveGroupMutationFn = Apollo.MutationFunction<RemoveGroupMutation, RemoveGroupMutationVariables>;

/**
 * __useRemoveGroupMutation__
 *
 * To run a mutation, you first call `useRemoveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeGroupMutation, { data, loading, error }] = useRemoveGroupMutation({
 *   variables: {
 *      removeGroupId: // value for 'removeGroupId'
 *   },
 * });
 */
export function useRemoveGroupMutation(baseOptions?: Apollo.MutationHookOptions<RemoveGroupMutation, RemoveGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveGroupMutation, RemoveGroupMutationVariables>(RemoveGroupDocument, options);
      }
export type RemoveGroupMutationHookResult = ReturnType<typeof useRemoveGroupMutation>;
export type RemoveGroupMutationResult = Apollo.MutationResult<RemoveGroupMutation>;
export type RemoveGroupMutationOptions = Apollo.BaseMutationOptions<RemoveGroupMutation, RemoveGroupMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation updateGroup($data: GroupInput!, $updateGroupId: String!) {
  updateGroup(data: $data, id: $updateGroupId) {
    id
    title
    courseId
  }
}
    `;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateGroupId: // value for 'updateGroupId'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const CreateHealthGroupDocument = gql`
    mutation CreateHealthGroup($data: HealthGroupInput!) {
  createHealthGroup(data: $data) {
    id
    title
  }
}
    `;
export type CreateHealthGroupMutationFn = Apollo.MutationFunction<CreateHealthGroupMutation, CreateHealthGroupMutationVariables>;

/**
 * __useCreateHealthGroupMutation__
 *
 * To run a mutation, you first call `useCreateHealthGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHealthGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHealthGroupMutation, { data, loading, error }] = useCreateHealthGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateHealthGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateHealthGroupMutation, CreateHealthGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHealthGroupMutation, CreateHealthGroupMutationVariables>(CreateHealthGroupDocument, options);
      }
export type CreateHealthGroupMutationHookResult = ReturnType<typeof useCreateHealthGroupMutation>;
export type CreateHealthGroupMutationResult = Apollo.MutationResult<CreateHealthGroupMutation>;
export type CreateHealthGroupMutationOptions = Apollo.BaseMutationOptions<CreateHealthGroupMutation, CreateHealthGroupMutationVariables>;
export const RemoveHealthGroupDocument = gql`
    mutation RemoveHealthGroup($removeHealthGroupId: String!) {
  removeHealthGroup(id: $removeHealthGroupId)
}
    `;
export type RemoveHealthGroupMutationFn = Apollo.MutationFunction<RemoveHealthGroupMutation, RemoveHealthGroupMutationVariables>;

/**
 * __useRemoveHealthGroupMutation__
 *
 * To run a mutation, you first call `useRemoveHealthGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveHealthGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeHealthGroupMutation, { data, loading, error }] = useRemoveHealthGroupMutation({
 *   variables: {
 *      removeHealthGroupId: // value for 'removeHealthGroupId'
 *   },
 * });
 */
export function useRemoveHealthGroupMutation(baseOptions?: Apollo.MutationHookOptions<RemoveHealthGroupMutation, RemoveHealthGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveHealthGroupMutation, RemoveHealthGroupMutationVariables>(RemoveHealthGroupDocument, options);
      }
export type RemoveHealthGroupMutationHookResult = ReturnType<typeof useRemoveHealthGroupMutation>;
export type RemoveHealthGroupMutationResult = Apollo.MutationResult<RemoveHealthGroupMutation>;
export type RemoveHealthGroupMutationOptions = Apollo.BaseMutationOptions<RemoveHealthGroupMutation, RemoveHealthGroupMutationVariables>;
export const UpdateHealthGroupDocument = gql`
    mutation UpdateHealthGroup($data: HealthGroupInput!, $updateHealthGroupId: String!) {
  updateHealthGroup(data: $data, id: $updateHealthGroupId) {
    id
    title
  }
}
    `;
export type UpdateHealthGroupMutationFn = Apollo.MutationFunction<UpdateHealthGroupMutation, UpdateHealthGroupMutationVariables>;

/**
 * __useUpdateHealthGroupMutation__
 *
 * To run a mutation, you first call `useUpdateHealthGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHealthGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHealthGroupMutation, { data, loading, error }] = useUpdateHealthGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateHealthGroupId: // value for 'updateHealthGroupId'
 *   },
 * });
 */
export function useUpdateHealthGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHealthGroupMutation, UpdateHealthGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHealthGroupMutation, UpdateHealthGroupMutationVariables>(UpdateHealthGroupDocument, options);
      }
export type UpdateHealthGroupMutationHookResult = ReturnType<typeof useUpdateHealthGroupMutation>;
export type UpdateHealthGroupMutationResult = Apollo.MutationResult<UpdateHealthGroupMutation>;
export type UpdateHealthGroupMutationOptions = Apollo.BaseMutationOptions<UpdateHealthGroupMutation, UpdateHealthGroupMutationVariables>;
export const CreatePhysicalEducationDocument = gql`
    mutation CreatePhysicalEducation($data: PhysicalEducationInput!) {
  createPhysicalEducation(data: $data) {
    id
    title
  }
}
    `;
export type CreatePhysicalEducationMutationFn = Apollo.MutationFunction<CreatePhysicalEducationMutation, CreatePhysicalEducationMutationVariables>;

/**
 * __useCreatePhysicalEducationMutation__
 *
 * To run a mutation, you first call `useCreatePhysicalEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhysicalEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhysicalEducationMutation, { data, loading, error }] = useCreatePhysicalEducationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePhysicalEducationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePhysicalEducationMutation, CreatePhysicalEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePhysicalEducationMutation, CreatePhysicalEducationMutationVariables>(CreatePhysicalEducationDocument, options);
      }
export type CreatePhysicalEducationMutationHookResult = ReturnType<typeof useCreatePhysicalEducationMutation>;
export type CreatePhysicalEducationMutationResult = Apollo.MutationResult<CreatePhysicalEducationMutation>;
export type CreatePhysicalEducationMutationOptions = Apollo.BaseMutationOptions<CreatePhysicalEducationMutation, CreatePhysicalEducationMutationVariables>;
export const RemovePhysicalEducationDocument = gql`
    mutation RemovePhysicalEducation($removePhysicalEducationId: String!) {
  removePhysicalEducation(id: $removePhysicalEducationId)
}
    `;
export type RemovePhysicalEducationMutationFn = Apollo.MutationFunction<RemovePhysicalEducationMutation, RemovePhysicalEducationMutationVariables>;

/**
 * __useRemovePhysicalEducationMutation__
 *
 * To run a mutation, you first call `useRemovePhysicalEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePhysicalEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePhysicalEducationMutation, { data, loading, error }] = useRemovePhysicalEducationMutation({
 *   variables: {
 *      removePhysicalEducationId: // value for 'removePhysicalEducationId'
 *   },
 * });
 */
export function useRemovePhysicalEducationMutation(baseOptions?: Apollo.MutationHookOptions<RemovePhysicalEducationMutation, RemovePhysicalEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePhysicalEducationMutation, RemovePhysicalEducationMutationVariables>(RemovePhysicalEducationDocument, options);
      }
export type RemovePhysicalEducationMutationHookResult = ReturnType<typeof useRemovePhysicalEducationMutation>;
export type RemovePhysicalEducationMutationResult = Apollo.MutationResult<RemovePhysicalEducationMutation>;
export type RemovePhysicalEducationMutationOptions = Apollo.BaseMutationOptions<RemovePhysicalEducationMutation, RemovePhysicalEducationMutationVariables>;
export const UpdatePhysicalEducationDocument = gql`
    mutation UpdatePhysicalEducation($data: PhysicalEducationInput!, $updatePhysicalEducationId: String!) {
  updatePhysicalEducation(data: $data, id: $updatePhysicalEducationId) {
    id
    title
  }
}
    `;
export type UpdatePhysicalEducationMutationFn = Apollo.MutationFunction<UpdatePhysicalEducationMutation, UpdatePhysicalEducationMutationVariables>;

/**
 * __useUpdatePhysicalEducationMutation__
 *
 * To run a mutation, you first call `useUpdatePhysicalEducationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysicalEducationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysicalEducationMutation, { data, loading, error }] = useUpdatePhysicalEducationMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updatePhysicalEducationId: // value for 'updatePhysicalEducationId'
 *   },
 * });
 */
export function useUpdatePhysicalEducationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysicalEducationMutation, UpdatePhysicalEducationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysicalEducationMutation, UpdatePhysicalEducationMutationVariables>(UpdatePhysicalEducationDocument, options);
      }
export type UpdatePhysicalEducationMutationHookResult = ReturnType<typeof useUpdatePhysicalEducationMutation>;
export type UpdatePhysicalEducationMutationResult = Apollo.MutationResult<UpdatePhysicalEducationMutation>;
export type UpdatePhysicalEducationMutationOptions = Apollo.BaseMutationOptions<UpdatePhysicalEducationMutation, UpdatePhysicalEducationMutationVariables>;
export const CreateStudentDocument = gql`
    mutation createStudent($data: StudentInput!) {
  createStudent(data: $data) {
    firstName
    lastName
    secondName
    birthDate
    isExpelled
    groupId
  }
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const RemoveManyStudentsDocument = gql`
    mutation removeManyStudents($ids: [String!]!) {
  removeManyStudents(ids: $ids)
}
    `;
export type RemoveManyStudentsMutationFn = Apollo.MutationFunction<RemoveManyStudentsMutation, RemoveManyStudentsMutationVariables>;

/**
 * __useRemoveManyStudentsMutation__
 *
 * To run a mutation, you first call `useRemoveManyStudentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyStudentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyStudentsMutation, { data, loading, error }] = useRemoveManyStudentsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyStudentsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyStudentsMutation, RemoveManyStudentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyStudentsMutation, RemoveManyStudentsMutationVariables>(RemoveManyStudentsDocument, options);
      }
export type RemoveManyStudentsMutationHookResult = ReturnType<typeof useRemoveManyStudentsMutation>;
export type RemoveManyStudentsMutationResult = Apollo.MutationResult<RemoveManyStudentsMutation>;
export type RemoveManyStudentsMutationOptions = Apollo.BaseMutationOptions<RemoveManyStudentsMutation, RemoveManyStudentsMutationVariables>;
export const RemoveStudentDocument = gql`
    mutation RemoveStudent($removeStudentId: String!) {
  removeStudent(id: $removeStudentId)
}
    `;
export type RemoveStudentMutationFn = Apollo.MutationFunction<RemoveStudentMutation, RemoveStudentMutationVariables>;

/**
 * __useRemoveStudentMutation__
 *
 * To run a mutation, you first call `useRemoveStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStudentMutation, { data, loading, error }] = useRemoveStudentMutation({
 *   variables: {
 *      removeStudentId: // value for 'removeStudentId'
 *   },
 * });
 */
export function useRemoveStudentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveStudentMutation, RemoveStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveStudentMutation, RemoveStudentMutationVariables>(RemoveStudentDocument, options);
      }
export type RemoveStudentMutationHookResult = ReturnType<typeof useRemoveStudentMutation>;
export type RemoveStudentMutationResult = Apollo.MutationResult<RemoveStudentMutation>;
export type RemoveStudentMutationOptions = Apollo.BaseMutationOptions<RemoveStudentMutation, RemoveStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($data: UpdateStudentInput!, $updateStudentId: String!) {
  updateStudent(data: $data, id: $updateStudentId) {
    firstName
    lastName
    secondName
    birthDate
    isExpelled
    groupId
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateStudentId: // value for 'updateStudentId'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const GetAllCoursesDocument = gql`
    query getAllCourses($params: CourseParamsInput!) {
  getAllCourses(params: $params) {
    id
    number
    department {
      id
      title
    }
  }
}
    `;

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllCoursesQuery(baseOptions: Apollo.QueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables> & ({ variables: GetAllCoursesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
      }
export function useGetAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export function useGetAllCoursesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export type GetAllCoursesQueryHookResult = ReturnType<typeof useGetAllCoursesQuery>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<typeof useGetAllCoursesLazyQuery>;
export type GetAllCoursesSuspenseQueryHookResult = ReturnType<typeof useGetAllCoursesSuspenseQuery>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<GetAllCoursesQuery, GetAllCoursesQueryVariables>;
export const GetCourseByIdDocument = gql`
    query getCourseById($getCourseById: String!) {
  getCourseById(id: $getCourseById) {
    id
    number
    department {
      id
      title
    }
  }
}
    `;

/**
 * __useGetCourseByIdQuery__
 *
 * To run a query within a React component, call `useGetCourseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseByIdQuery({
 *   variables: {
 *      getCourseById: // value for 'getCourseById'
 *   },
 * });
 */
export function useGetCourseByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCourseByIdQuery, GetCourseByIdQueryVariables> & ({ variables: GetCourseByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(GetCourseByIdDocument, options);
      }
export function useGetCourseByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCourseByIdQuery, GetCourseByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(GetCourseByIdDocument, options);
        }
export function useGetCourseByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCourseByIdQuery, GetCourseByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(GetCourseByIdDocument, options);
        }
export type GetCourseByIdQueryHookResult = ReturnType<typeof useGetCourseByIdQuery>;
export type GetCourseByIdLazyQueryHookResult = ReturnType<typeof useGetCourseByIdLazyQuery>;
export type GetCourseByIdSuspenseQueryHookResult = ReturnType<typeof useGetCourseByIdSuspenseQuery>;
export type GetCourseByIdQueryResult = Apollo.QueryResult<GetCourseByIdQuery, GetCourseByIdQueryVariables>;
export const GetAllDepartmentsDocument = gql`
    query getAllDepartments($params: DepartmentParamsInput!) {
  getAllDepartments(params: $params) {
    id
    title
    courses {
      id
      number
    }
  }
}
    `;

/**
 * __useGetAllDepartmentsQuery__
 *
 * To run a query within a React component, call `useGetAllDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDepartmentsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllDepartmentsQuery(baseOptions: Apollo.QueryHookOptions<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables> & ({ variables: GetAllDepartmentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables>(GetAllDepartmentsDocument, options);
      }
export function useGetAllDepartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables>(GetAllDepartmentsDocument, options);
        }
export function useGetAllDepartmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables>(GetAllDepartmentsDocument, options);
        }
export type GetAllDepartmentsQueryHookResult = ReturnType<typeof useGetAllDepartmentsQuery>;
export type GetAllDepartmentsLazyQueryHookResult = ReturnType<typeof useGetAllDepartmentsLazyQuery>;
export type GetAllDepartmentsSuspenseQueryHookResult = ReturnType<typeof useGetAllDepartmentsSuspenseQuery>;
export type GetAllDepartmentsQueryResult = Apollo.QueryResult<GetAllDepartmentsQuery, GetAllDepartmentsQueryVariables>;
export const GetDepartmentByIdDocument = gql`
    query getDepartmentById($getDepartmentById: String!) {
  getDepartmentById(id: $getDepartmentById) {
    id
    title
    courses {
      id
      number
    }
  }
}
    `;

/**
 * __useGetDepartmentByIdQuery__
 *
 * To run a query within a React component, call `useGetDepartmentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepartmentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepartmentByIdQuery({
 *   variables: {
 *      getDepartmentById: // value for 'getDepartmentById'
 *   },
 * });
 */
export function useGetDepartmentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables> & ({ variables: GetDepartmentByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables>(GetDepartmentByIdDocument, options);
      }
export function useGetDepartmentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables>(GetDepartmentByIdDocument, options);
        }
export function useGetDepartmentByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables>(GetDepartmentByIdDocument, options);
        }
export type GetDepartmentByIdQueryHookResult = ReturnType<typeof useGetDepartmentByIdQuery>;
export type GetDepartmentByIdLazyQueryHookResult = ReturnType<typeof useGetDepartmentByIdLazyQuery>;
export type GetDepartmentByIdSuspenseQueryHookResult = ReturnType<typeof useGetDepartmentByIdSuspenseQuery>;
export type GetDepartmentByIdQueryResult = Apollo.QueryResult<GetDepartmentByIdQuery, GetDepartmentByIdQueryVariables>;
export const GetAllGroupsDocument = gql`
    query GetAllGroups($params: GroupParamsInput!) {
  getAllGroups(params: $params) {
    id
    title
    course {
      id
      number
      department {
        id
        title
      }
    }
  }
}
    `;

/**
 * __useGetAllGroupsQuery__
 *
 * To run a query within a React component, call `useGetAllGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGroupsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllGroupsQuery(baseOptions: Apollo.QueryHookOptions<GetAllGroupsQuery, GetAllGroupsQueryVariables> & ({ variables: GetAllGroupsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllGroupsQuery, GetAllGroupsQueryVariables>(GetAllGroupsDocument, options);
      }
export function useGetAllGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGroupsQuery, GetAllGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllGroupsQuery, GetAllGroupsQueryVariables>(GetAllGroupsDocument, options);
        }
export function useGetAllGroupsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllGroupsQuery, GetAllGroupsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllGroupsQuery, GetAllGroupsQueryVariables>(GetAllGroupsDocument, options);
        }
export type GetAllGroupsQueryHookResult = ReturnType<typeof useGetAllGroupsQuery>;
export type GetAllGroupsLazyQueryHookResult = ReturnType<typeof useGetAllGroupsLazyQuery>;
export type GetAllGroupsSuspenseQueryHookResult = ReturnType<typeof useGetAllGroupsSuspenseQuery>;
export type GetAllGroupsQueryResult = Apollo.QueryResult<GetAllGroupsQuery, GetAllGroupsQueryVariables>;
export const GetGroupByIdDocument = gql`
    query GetGroupById($getGroupByIdId: String!) {
  getGroupById(id: $getGroupByIdId) {
    id
    title
    course {
      id
      number
      departmentId
    }
  }
}
    `;

/**
 * __useGetGroupByIdQuery__
 *
 * To run a query within a React component, call `useGetGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupByIdQuery({
 *   variables: {
 *      getGroupByIdId: // value for 'getGroupByIdId'
 *   },
 * });
 */
export function useGetGroupByIdQuery(baseOptions: Apollo.QueryHookOptions<GetGroupByIdQuery, GetGroupByIdQueryVariables> & ({ variables: GetGroupByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupByIdQuery, GetGroupByIdQueryVariables>(GetGroupByIdDocument, options);
      }
export function useGetGroupByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupByIdQuery, GetGroupByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupByIdQuery, GetGroupByIdQueryVariables>(GetGroupByIdDocument, options);
        }
export function useGetGroupByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGroupByIdQuery, GetGroupByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGroupByIdQuery, GetGroupByIdQueryVariables>(GetGroupByIdDocument, options);
        }
export type GetGroupByIdQueryHookResult = ReturnType<typeof useGetGroupByIdQuery>;
export type GetGroupByIdLazyQueryHookResult = ReturnType<typeof useGetGroupByIdLazyQuery>;
export type GetGroupByIdSuspenseQueryHookResult = ReturnType<typeof useGetGroupByIdSuspenseQuery>;
export type GetGroupByIdQueryResult = Apollo.QueryResult<GetGroupByIdQuery, GetGroupByIdQueryVariables>;
export const GetAllHealthGroupsDocument = gql`
    query GetAllHealthGroups($params: HealthGroupParamsInput!) {
  getAllHealthGroups(params: $params) {
    id
    title
  }
}
    `;

/**
 * __useGetAllHealthGroupsQuery__
 *
 * To run a query within a React component, call `useGetAllHealthGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHealthGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHealthGroupsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllHealthGroupsQuery(baseOptions: Apollo.QueryHookOptions<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables> & ({ variables: GetAllHealthGroupsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables>(GetAllHealthGroupsDocument, options);
      }
export function useGetAllHealthGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables>(GetAllHealthGroupsDocument, options);
        }
export function useGetAllHealthGroupsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables>(GetAllHealthGroupsDocument, options);
        }
export type GetAllHealthGroupsQueryHookResult = ReturnType<typeof useGetAllHealthGroupsQuery>;
export type GetAllHealthGroupsLazyQueryHookResult = ReturnType<typeof useGetAllHealthGroupsLazyQuery>;
export type GetAllHealthGroupsSuspenseQueryHookResult = ReturnType<typeof useGetAllHealthGroupsSuspenseQuery>;
export type GetAllHealthGroupsQueryResult = Apollo.QueryResult<GetAllHealthGroupsQuery, GetAllHealthGroupsQueryVariables>;
export const GetHealthGroupByIdDocument = gql`
    query GetHealthGroupById($getHealthGroupByIdId: String!) {
  getHealthGroupById(id: $getHealthGroupByIdId) {
    id
    id
  }
}
    `;

/**
 * __useGetHealthGroupByIdQuery__
 *
 * To run a query within a React component, call `useGetHealthGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHealthGroupByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHealthGroupByIdQuery({
 *   variables: {
 *      getHealthGroupByIdId: // value for 'getHealthGroupByIdId'
 *   },
 * });
 */
export function useGetHealthGroupByIdQuery(baseOptions: Apollo.QueryHookOptions<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables> & ({ variables: GetHealthGroupByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables>(GetHealthGroupByIdDocument, options);
      }
export function useGetHealthGroupByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables>(GetHealthGroupByIdDocument, options);
        }
export function useGetHealthGroupByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables>(GetHealthGroupByIdDocument, options);
        }
export type GetHealthGroupByIdQueryHookResult = ReturnType<typeof useGetHealthGroupByIdQuery>;
export type GetHealthGroupByIdLazyQueryHookResult = ReturnType<typeof useGetHealthGroupByIdLazyQuery>;
export type GetHealthGroupByIdSuspenseQueryHookResult = ReturnType<typeof useGetHealthGroupByIdSuspenseQuery>;
export type GetHealthGroupByIdQueryResult = Apollo.QueryResult<GetHealthGroupByIdQuery, GetHealthGroupByIdQueryVariables>;
export const GetAllPhysicalEducationsDocument = gql`
    query GetAllPhysicalEducations($params: PhysicalEducationParamsInput!) {
  getAllPhysicalEducations(params: $params) {
    id
    title
  }
}
    `;

/**
 * __useGetAllPhysicalEducationsQuery__
 *
 * To run a query within a React component, call `useGetAllPhysicalEducationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhysicalEducationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhysicalEducationsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllPhysicalEducationsQuery(baseOptions: Apollo.QueryHookOptions<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables> & ({ variables: GetAllPhysicalEducationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables>(GetAllPhysicalEducationsDocument, options);
      }
export function useGetAllPhysicalEducationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables>(GetAllPhysicalEducationsDocument, options);
        }
export function useGetAllPhysicalEducationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables>(GetAllPhysicalEducationsDocument, options);
        }
export type GetAllPhysicalEducationsQueryHookResult = ReturnType<typeof useGetAllPhysicalEducationsQuery>;
export type GetAllPhysicalEducationsLazyQueryHookResult = ReturnType<typeof useGetAllPhysicalEducationsLazyQuery>;
export type GetAllPhysicalEducationsSuspenseQueryHookResult = ReturnType<typeof useGetAllPhysicalEducationsSuspenseQuery>;
export type GetAllPhysicalEducationsQueryResult = Apollo.QueryResult<GetAllPhysicalEducationsQuery, GetAllPhysicalEducationsQueryVariables>;
export const GetPhysicalEducationByTitleDocument = gql`
    query GetPhysicalEducationByTitle($title: String!) {
  getPhysicalEducationByTitle(title: $title) {
    id
    title
  }
}
    `;

/**
 * __useGetPhysicalEducationByTitleQuery__
 *
 * To run a query within a React component, call `useGetPhysicalEducationByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhysicalEducationByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhysicalEducationByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetPhysicalEducationByTitleQuery(baseOptions: Apollo.QueryHookOptions<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables> & ({ variables: GetPhysicalEducationByTitleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables>(GetPhysicalEducationByTitleDocument, options);
      }
export function useGetPhysicalEducationByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables>(GetPhysicalEducationByTitleDocument, options);
        }
export function useGetPhysicalEducationByTitleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables>(GetPhysicalEducationByTitleDocument, options);
        }
export type GetPhysicalEducationByTitleQueryHookResult = ReturnType<typeof useGetPhysicalEducationByTitleQuery>;
export type GetPhysicalEducationByTitleLazyQueryHookResult = ReturnType<typeof useGetPhysicalEducationByTitleLazyQuery>;
export type GetPhysicalEducationByTitleSuspenseQueryHookResult = ReturnType<typeof useGetPhysicalEducationByTitleSuspenseQuery>;
export type GetPhysicalEducationByTitleQueryResult = Apollo.QueryResult<GetPhysicalEducationByTitleQuery, GetPhysicalEducationByTitleQueryVariables>;
export const GetAllStudentsDocument = gql`
    query getAllStudents($params: StudentParamsInput!) {
  getAllStudents(params: $params) {
    firstName
    lastName
    secondName
    birthDate
    isExpelled
    group {
      id
      title
      course {
        id
        number
        department {
          id
          title
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllStudentsQuery__
 *
 * To run a query within a React component, call `useGetAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStudentsQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllStudentsQuery(baseOptions: Apollo.QueryHookOptions<GetAllStudentsQuery, GetAllStudentsQueryVariables> & ({ variables: GetAllStudentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStudentsQuery, GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
      }
export function useGetAllStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStudentsQuery, GetAllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStudentsQuery, GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
        }
export function useGetAllStudentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllStudentsQuery, GetAllStudentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllStudentsQuery, GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
        }
export type GetAllStudentsQueryHookResult = ReturnType<typeof useGetAllStudentsQuery>;
export type GetAllStudentsLazyQueryHookResult = ReturnType<typeof useGetAllStudentsLazyQuery>;
export type GetAllStudentsSuspenseQueryHookResult = ReturnType<typeof useGetAllStudentsSuspenseQuery>;
export type GetAllStudentsQueryResult = Apollo.QueryResult<GetAllStudentsQuery, GetAllStudentsQueryVariables>;