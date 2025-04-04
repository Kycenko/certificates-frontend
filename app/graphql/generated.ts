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
  createdAt: Scalars['DateTime']['output'];
  finishDate: Scalars['DateTime']['output'];
  healthGroup: HealthGroupModel;
  healthGroupId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  physicalEducation: PhysicalEducationModel;
  physicalEducationId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  student: StudentModel;
  studentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  studentLastName?: InputMaybe<Scalars['String']['input']>;
};

export type CourseInput = {
  departmentId: Scalars['String']['input'];
  number: Scalars['String']['input'];
};

export type CourseModel = {
  __typename?: 'CourseModel';
  createdAt: Scalars['DateTime']['output'];
  department: DepartmentModel;
  departmentId: Scalars['String']['output'];
  groups?: Maybe<Array<GroupModel>>;
  id: Scalars['String']['output'];
  number: Scalars['String']['output'];
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
  students?: Maybe<Array<StudentModel>>;
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
  certificates?: Maybe<Array<CertificateModel>>;
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
  removeAllCertificateHistories: Scalars['Boolean']['output'];
  removeAllCertificates: Scalars['Boolean']['output'];
  removeAllCourses: Scalars['Boolean']['output'];
  removeAllDepartments: Scalars['Boolean']['output'];
  removeAllGroups: Scalars['Boolean']['output'];
  removeAllHealthGroup: HealthGroupModel;
  removeAllPhysicalEducations: Scalars['Boolean']['output'];
  removeAllStudentHistory: Scalars['Boolean']['output'];
  removeAllStudents: Scalars['Boolean']['output'];
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


export type MutationRemoveAllCertificateHistoriesArgs = {
  certificateId: Scalars['String']['input'];
};


export type MutationRemoveAllStudentHistoryArgs = {
  studentId: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
  updateDto: UpdateUserInput;
};

export type PhysicalEducationInput = {
  title: Scalars['String']['input'];
};

export type PhysicalEducationModel = {
  __typename?: 'PhysicalEducationModel';
  certificates?: Maybe<Array<CertificateModel>>;
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
  params?: InputMaybe<CertificateParamsInput>;
};


export type QueryGetAllCoursesArgs = {
  params?: InputMaybe<CourseParamsInput>;
};


export type QueryGetAllDepartmentsArgs = {
  params?: InputMaybe<DepartmentParamsInput>;
};


export type QueryGetAllGroupsArgs = {
  params?: InputMaybe<GroupParamsInput>;
};


export type QueryGetAllHealthGroupsArgs = {
  params?: InputMaybe<HealthGroupParamsInput>;
};


export type QueryGetAllPhysicalEducationsArgs = {
  params?: InputMaybe<PhysicalEducationParamsInput>;
};


export type QueryGetAllStudentHistoriesArgs = {
  studentId: Scalars['String']['input'];
};


export type QueryGetAllStudentsArgs = {
  params?: InputMaybe<StudentParamsInput>;
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
  student: StudentModel;
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
  courseNumber?: InputMaybe<Scalars['String']['input']>;
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
  number?: InputMaybe<Scalars['String']['input']>;
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
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthModel', accessToken: string, refreshToken: string, user: { __typename?: 'UserModel', id: string, login: string, isAdmin: boolean } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type CreateCertificateMutationVariables = Exact<{
  data: CertificateInput;
}>;


export type CreateCertificateMutation = { __typename?: 'Mutation', createCertificate: { __typename?: 'CertificateModel', startDate: any, finishDate: any, studentId: string, healthGroupId: string, physicalEducationId: string } };

export type RemoveCertificateMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveCertificateMutation = { __typename?: 'Mutation', removeCertificate: boolean };

export type RemoveManyCertificatesMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyCertificatesMutation = { __typename?: 'Mutation', removeManyCertificates: boolean };

export type UpdateCertificateMutationVariables = Exact<{
  data: UpdateCertificateInput;
  id: Scalars['String']['input'];
}>;


export type UpdateCertificateMutation = { __typename?: 'Mutation', updateCertificate: { __typename?: 'CertificateModel', startDate: any, finishDate: any, studentId: string, healthGroupId: string, physicalEducationId: string } };

export type CreateCourseMutationVariables = Exact<{
  data: CourseInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'CourseModel', id: string, number: string, departmentId: string } };

export type RemoveCourseMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveCourseMutation = { __typename?: 'Mutation', removeCourse: boolean };

export type RemoveManyCoursesMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyCoursesMutation = { __typename?: 'Mutation', removeManyCourses: boolean };

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateCourseInput;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'CourseModel', id: string, number: string, departmentId: string } };

export type CreateDepartmentMutationVariables = Exact<{
  data: DepartmentInput;
}>;


export type CreateDepartmentMutation = { __typename?: 'Mutation', createDepartment: { __typename?: 'DepartmentModel', id: string, title: string } };

export type RemoveDepartmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveDepartmentMutation = { __typename?: 'Mutation', removeDepartment: boolean };

export type RemoveManyDepartmentsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyDepartmentsMutation = { __typename?: 'Mutation', removeManyDepartments: boolean };

export type UpdateDepartmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: DepartmentInput;
}>;


export type UpdateDepartmentMutation = { __typename?: 'Mutation', updateDepartment: { __typename?: 'DepartmentModel', id: string, title: string } };

export type CreateGroupMutationVariables = Exact<{
  data: GroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup: { __typename?: 'GroupModel', id: string, title: string, courseId?: string | null } };

export type RemoveGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveGroupMutation = { __typename?: 'Mutation', removeGroup: boolean };

export type RemoveManyGroupsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyGroupsMutation = { __typename?: 'Mutation', removeManyGroups: boolean };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: GroupInput;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup: { __typename?: 'GroupModel', id: string, title: string, courseId?: string | null } };

export type CreateHealthGroupMutationVariables = Exact<{
  data: HealthGroupInput;
}>;


export type CreateHealthGroupMutation = { __typename?: 'Mutation', createHealthGroup: { __typename?: 'HealthGroupModel', id: string, title: string } };

export type RemoveHealthGroupMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveHealthGroupMutation = { __typename?: 'Mutation', removeHealthGroup: boolean };

export type RemoveManyHealthGroupsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyHealthGroupsMutation = { __typename?: 'Mutation', removeManyHealthGroups: boolean };

export type UpdateHealthGroupMutationVariables = Exact<{
  data: HealthGroupInput;
  id: Scalars['String']['input'];
}>;


export type UpdateHealthGroupMutation = { __typename?: 'Mutation', updateHealthGroup: { __typename?: 'HealthGroupModel', id: string, title: string } };

export type CreatePhysicalEducationMutationVariables = Exact<{
  data: PhysicalEducationInput;
}>;


export type CreatePhysicalEducationMutation = { __typename?: 'Mutation', createPhysicalEducation: { __typename?: 'PhysicalEducationModel', id: string, title: string } };

export type RemoveManyPhysicalEducationsMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type RemoveManyPhysicalEducationsMutation = { __typename?: 'Mutation', removeManyPhysicalEducations: boolean };

export type RemovePhysicalEducationMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemovePhysicalEducationMutation = { __typename?: 'Mutation', removePhysicalEducation: boolean };

export type UpdatePhysicalEducationMutationVariables = Exact<{
  data: PhysicalEducationInput;
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
}>;


export type RemoveStudentMutation = { __typename?: 'Mutation', removeStudent: boolean };

export type UpdateStudentMutationVariables = Exact<{
  data: UpdateStudentInput;
  id: Scalars['String']['input'];
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'StudentModel', firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean, groupId?: string | null } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserModel', id: string, login: string, isAdmin: boolean } };

export type GetAllCertificatesQueryVariables = Exact<{
  params: CertificateParamsInput;
}>;


export type GetAllCertificatesQuery = { __typename?: 'Query', getAllCertificates: Array<{ __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any, student: { __typename?: 'StudentModel', id: string, firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean }, physicalEducation: { __typename?: 'PhysicalEducationModel', id: string, title: string }, healthGroup: { __typename?: 'HealthGroupModel', id: string, title: string } }> };

export type GetCertificateByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCertificateByIdQuery = { __typename?: 'Query', getCertificateById: { __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any, studentId: string, healthGroupId: string, physicalEducationId: string, student: { __typename?: 'StudentModel', lastName: string, firstName: string, secondName?: string | null, birthDate: any, isExpelled: boolean }, physicalEducation: { __typename?: 'PhysicalEducationModel', id: string, title: string }, healthGroup: { __typename?: 'HealthGroupModel', id: string, title: string } } };

export type GetAllCoursesQueryVariables = Exact<{
  params: CourseParamsInput;
}>;


export type GetAllCoursesQuery = { __typename?: 'Query', getAllCourses: Array<{ __typename?: 'CourseModel', id: string, number: string, groups?: Array<{ __typename?: 'GroupModel', id: string, title: string }> | null, department: { __typename?: 'DepartmentModel', id: string, title: string } }> };

export type GetCourseByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCourseByIdQuery = { __typename?: 'Query', getCourseById: { __typename?: 'CourseModel', id: string, number: string, department: { __typename?: 'DepartmentModel', id: string, title: string }, groups?: Array<{ __typename?: 'GroupModel', id: string, title: string, students?: Array<{ __typename?: 'StudentModel', id: string }> | null }> | null } };

export type GetAllDepartmentsQueryVariables = Exact<{
  params: DepartmentParamsInput;
}>;


export type GetAllDepartmentsQuery = { __typename?: 'Query', getAllDepartments: Array<{ __typename?: 'DepartmentModel', id: string, title: string, courses?: Array<{ __typename?: 'CourseModel', id: string, number: string }> | null }> };

export type GetDepartmentByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetDepartmentByIdQuery = { __typename?: 'Query', getDepartmentById: { __typename?: 'DepartmentModel', id: string, title: string, courses?: Array<{ __typename?: 'CourseModel', id: string, number: string, groups?: Array<{ __typename?: 'GroupModel', id: string, title: string }> | null }> | null } };

export type GetAllGroupsQueryVariables = Exact<{
  params: GroupParamsInput;
}>;


export type GetAllGroupsQuery = { __typename?: 'Query', getAllGroups: Array<{ __typename?: 'GroupModel', id: string, title: string, students?: Array<{ __typename?: 'StudentModel', id: string, firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean }> | null, course?: { __typename?: 'CourseModel', id: string, number: string, department: { __typename?: 'DepartmentModel', id: string, title: string } } | null }> };

export type GetGroupByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetGroupByIdQuery = { __typename?: 'Query', getGroupById: { __typename?: 'GroupModel', id: string, title: string, students?: Array<{ __typename?: 'StudentModel', id: string, lastName: string, firstName: string, secondName?: string | null, birthDate: any, certificates?: Array<{ __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any }> | null }> | null, course?: { __typename?: 'CourseModel', id: string, number: string, departmentId: string } | null } };

export type GetAllHealthGroupsQueryVariables = Exact<{
  params: HealthGroupParamsInput;
}>;


export type GetAllHealthGroupsQuery = { __typename?: 'Query', getAllHealthGroups: Array<{ __typename?: 'HealthGroupModel', id: string, title: string, certificates?: Array<{ __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any, studentId: string }> | null }> };

export type GetHealthGroupByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetHealthGroupByIdQuery = { __typename?: 'Query', getHealthGroupById: { __typename?: 'HealthGroupModel', id: string, title: string, certificates?: Array<{ __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any, student: { __typename?: 'StudentModel', id: string, lastName: string, firstName: string, secondName?: string | null } }> | null } };

export type GetAllPhysicalEducationsQueryVariables = Exact<{
  params: PhysicalEducationParamsInput;
}>;


export type GetAllPhysicalEducationsQuery = { __typename?: 'Query', getAllPhysicalEducations: Array<{ __typename?: 'PhysicalEducationModel', id: string, title: string }> };

export type GetPhysicalEducationByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPhysicalEducationByIdQuery = { __typename?: 'Query', getPhysicalEducationById: { __typename?: 'PhysicalEducationModel', id: string, title: string, certificates?: Array<{ __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any, student: { __typename?: 'StudentModel', id: string, lastName: string, firstName: string, secondName?: string | null } }> | null } };

export type GetAllStudentsQueryVariables = Exact<{
  params: StudentParamsInput;
}>;


export type GetAllStudentsQuery = { __typename?: 'Query', getAllStudents: Array<{ __typename?: 'StudentModel', id: string, firstName: string, lastName: string, secondName?: string | null, birthDate: any, isExpelled: boolean, group?: { __typename?: 'GroupModel', id: string, title: string, course?: { __typename?: 'CourseModel', id: string, number: string, department: { __typename?: 'DepartmentModel', id: string, title: string } } | null } | null }> };

export type GetStudentByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetStudentByIdQuery = { __typename?: 'Query', getStudentById: { __typename?: 'StudentModel', id: string, lastName: string, firstName: string, secondName?: string | null, birthDate: any, groupId?: string | null, isExpelled: boolean, certificates?: Array<{ __typename?: 'CertificateModel', id: string, startDate: any, finishDate: any }> | null, group?: { __typename?: 'GroupModel', id: string, title: string } | null } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'UserModel', id: string, login: string, isAdmin: boolean } };


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
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateCertificateDocument = gql`
    mutation createCertificate($data: CertificateInput!) {
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
    mutation removeCertificate($id: String!) {
  removeCertificate(id: $id)
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
 *      id: // value for 'id'
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
export const RemoveManyCertificatesDocument = gql`
    mutation removeManyCertificates($ids: [String!]!) {
  removeManyCertificates(ids: $ids)
}
    `;
export type RemoveManyCertificatesMutationFn = Apollo.MutationFunction<RemoveManyCertificatesMutation, RemoveManyCertificatesMutationVariables>;

/**
 * __useRemoveManyCertificatesMutation__
 *
 * To run a mutation, you first call `useRemoveManyCertificatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyCertificatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyCertificatesMutation, { data, loading, error }] = useRemoveManyCertificatesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyCertificatesMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyCertificatesMutation, RemoveManyCertificatesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyCertificatesMutation, RemoveManyCertificatesMutationVariables>(RemoveManyCertificatesDocument, options);
      }
export type RemoveManyCertificatesMutationHookResult = ReturnType<typeof useRemoveManyCertificatesMutation>;
export type RemoveManyCertificatesMutationResult = Apollo.MutationResult<RemoveManyCertificatesMutation>;
export type RemoveManyCertificatesMutationOptions = Apollo.BaseMutationOptions<RemoveManyCertificatesMutation, RemoveManyCertificatesMutationVariables>;
export const UpdateCertificateDocument = gql`
    mutation updateCertificate($data: UpdateCertificateInput!, $id: String!) {
  updateCertificate(data: $data, id: $id) {
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
 *      id: // value for 'id'
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
    mutation removeCourse($id: String!) {
  removeCourse(id: $id)
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
 *      id: // value for 'id'
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
export const RemoveManyCoursesDocument = gql`
    mutation removeManyCourses($ids: [String!]!) {
  removeManyCourses(ids: $ids)
}
    `;
export type RemoveManyCoursesMutationFn = Apollo.MutationFunction<RemoveManyCoursesMutation, RemoveManyCoursesMutationVariables>;

/**
 * __useRemoveManyCoursesMutation__
 *
 * To run a mutation, you first call `useRemoveManyCoursesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyCoursesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyCoursesMutation, { data, loading, error }] = useRemoveManyCoursesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyCoursesMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyCoursesMutation, RemoveManyCoursesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyCoursesMutation, RemoveManyCoursesMutationVariables>(RemoveManyCoursesDocument, options);
      }
export type RemoveManyCoursesMutationHookResult = ReturnType<typeof useRemoveManyCoursesMutation>;
export type RemoveManyCoursesMutationResult = Apollo.MutationResult<RemoveManyCoursesMutation>;
export type RemoveManyCoursesMutationOptions = Apollo.BaseMutationOptions<RemoveManyCoursesMutation, RemoveManyCoursesMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation updateCourse($id: String!, $data: UpdateCourseInput!) {
  updateCourse(id: $id, data: $data) {
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
 *      id: // value for 'id'
 *      data: // value for 'data'
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
    mutation removeDepartment($id: String!) {
  removeDepartment(id: $id)
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
 *      id: // value for 'id'
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
    mutation updateDepartment($id: String!, $data: DepartmentInput!) {
  updateDepartment(id: $id, data: $data) {
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
 *      id: // value for 'id'
 *      data: // value for 'data'
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
    mutation removeGroup($id: String!) {
  removeGroup(id: $id)
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
 *      id: // value for 'id'
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
export const RemoveManyGroupsDocument = gql`
    mutation removeManyGroups($ids: [String!]!) {
  removeManyGroups(ids: $ids)
}
    `;
export type RemoveManyGroupsMutationFn = Apollo.MutationFunction<RemoveManyGroupsMutation, RemoveManyGroupsMutationVariables>;

/**
 * __useRemoveManyGroupsMutation__
 *
 * To run a mutation, you first call `useRemoveManyGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyGroupsMutation, { data, loading, error }] = useRemoveManyGroupsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyGroupsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyGroupsMutation, RemoveManyGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyGroupsMutation, RemoveManyGroupsMutationVariables>(RemoveManyGroupsDocument, options);
      }
export type RemoveManyGroupsMutationHookResult = ReturnType<typeof useRemoveManyGroupsMutation>;
export type RemoveManyGroupsMutationResult = Apollo.MutationResult<RemoveManyGroupsMutation>;
export type RemoveManyGroupsMutationOptions = Apollo.BaseMutationOptions<RemoveManyGroupsMutation, RemoveManyGroupsMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation updateGroup($id: String!, $data: GroupInput!) {
  updateGroup(id: $id, data: $data) {
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
 *      id: // value for 'id'
 *      data: // value for 'data'
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
    mutation createHealthGroup($data: HealthGroupInput!) {
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
    mutation removeHealthGroup($id: String!) {
  removeHealthGroup(id: $id)
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
 *      id: // value for 'id'
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
export const RemoveManyHealthGroupsDocument = gql`
    mutation removeManyHealthGroups($ids: [String!]!) {
  removeManyHealthGroups(ids: $ids)
}
    `;
export type RemoveManyHealthGroupsMutationFn = Apollo.MutationFunction<RemoveManyHealthGroupsMutation, RemoveManyHealthGroupsMutationVariables>;

/**
 * __useRemoveManyHealthGroupsMutation__
 *
 * To run a mutation, you first call `useRemoveManyHealthGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyHealthGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyHealthGroupsMutation, { data, loading, error }] = useRemoveManyHealthGroupsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyHealthGroupsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyHealthGroupsMutation, RemoveManyHealthGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyHealthGroupsMutation, RemoveManyHealthGroupsMutationVariables>(RemoveManyHealthGroupsDocument, options);
      }
export type RemoveManyHealthGroupsMutationHookResult = ReturnType<typeof useRemoveManyHealthGroupsMutation>;
export type RemoveManyHealthGroupsMutationResult = Apollo.MutationResult<RemoveManyHealthGroupsMutation>;
export type RemoveManyHealthGroupsMutationOptions = Apollo.BaseMutationOptions<RemoveManyHealthGroupsMutation, RemoveManyHealthGroupsMutationVariables>;
export const UpdateHealthGroupDocument = gql`
    mutation updateHealthGroup($data: HealthGroupInput!, $id: String!) {
  updateHealthGroup(data: $data, id: $id) {
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
 *      id: // value for 'id'
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
    mutation createPhysicalEducation($data: PhysicalEducationInput!) {
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
export const RemoveManyPhysicalEducationsDocument = gql`
    mutation removeManyPhysicalEducations($ids: [String!]!) {
  removeManyPhysicalEducations(ids: $ids)
}
    `;
export type RemoveManyPhysicalEducationsMutationFn = Apollo.MutationFunction<RemoveManyPhysicalEducationsMutation, RemoveManyPhysicalEducationsMutationVariables>;

/**
 * __useRemoveManyPhysicalEducationsMutation__
 *
 * To run a mutation, you first call `useRemoveManyPhysicalEducationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveManyPhysicalEducationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeManyPhysicalEducationsMutation, { data, loading, error }] = useRemoveManyPhysicalEducationsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveManyPhysicalEducationsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveManyPhysicalEducationsMutation, RemoveManyPhysicalEducationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveManyPhysicalEducationsMutation, RemoveManyPhysicalEducationsMutationVariables>(RemoveManyPhysicalEducationsDocument, options);
      }
export type RemoveManyPhysicalEducationsMutationHookResult = ReturnType<typeof useRemoveManyPhysicalEducationsMutation>;
export type RemoveManyPhysicalEducationsMutationResult = Apollo.MutationResult<RemoveManyPhysicalEducationsMutation>;
export type RemoveManyPhysicalEducationsMutationOptions = Apollo.BaseMutationOptions<RemoveManyPhysicalEducationsMutation, RemoveManyPhysicalEducationsMutationVariables>;
export const RemovePhysicalEducationDocument = gql`
    mutation removePhysicalEducation($id: String!) {
  removePhysicalEducation(id: $id)
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
 *      id: // value for 'id'
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
    mutation updatePhysicalEducation($data: PhysicalEducationInput!, $id: String!) {
  updatePhysicalEducation(data: $data, id: $id) {
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
 *      id: // value for 'id'
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
    mutation removeStudent($id: String!) {
  removeStudent(id: $id)
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
 *      id: // value for 'id'
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
    mutation updateStudent($data: UpdateStudentInput!, $id: String!) {
  updateStudent(data: $data, id: $id) {
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
 *      id: // value for 'id'
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
export const UpdateUserDocument = gql`
    mutation updateUser($id: String!, $data: UpdateUserInput!) {
  updateUser(id: $id, updateDto: $data) {
    id
    login
    isAdmin
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAllCertificatesDocument = gql`
    query getAllCertificates($params: CertificateParamsInput!) {
  getAllCertificates(params: $params) {
    id
    startDate
    finishDate
    student {
      id
      firstName
      lastName
      secondName
      birthDate
      isExpelled
    }
    physicalEducation {
      id
      title
    }
    healthGroup {
      id
      title
    }
  }
}
    `;

/**
 * __useGetAllCertificatesQuery__
 *
 * To run a query within a React component, call `useGetAllCertificatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCertificatesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetAllCertificatesQuery(baseOptions: Apollo.QueryHookOptions<GetAllCertificatesQuery, GetAllCertificatesQueryVariables> & ({ variables: GetAllCertificatesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCertificatesQuery, GetAllCertificatesQueryVariables>(GetAllCertificatesDocument, options);
      }
export function useGetAllCertificatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCertificatesQuery, GetAllCertificatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCertificatesQuery, GetAllCertificatesQueryVariables>(GetAllCertificatesDocument, options);
        }
export function useGetAllCertificatesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCertificatesQuery, GetAllCertificatesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCertificatesQuery, GetAllCertificatesQueryVariables>(GetAllCertificatesDocument, options);
        }
export type GetAllCertificatesQueryHookResult = ReturnType<typeof useGetAllCertificatesQuery>;
export type GetAllCertificatesLazyQueryHookResult = ReturnType<typeof useGetAllCertificatesLazyQuery>;
export type GetAllCertificatesSuspenseQueryHookResult = ReturnType<typeof useGetAllCertificatesSuspenseQuery>;
export type GetAllCertificatesQueryResult = Apollo.QueryResult<GetAllCertificatesQuery, GetAllCertificatesQueryVariables>;
export const GetCertificateByIdDocument = gql`
    query getCertificateById($id: String!) {
  getCertificateById(id: $id) {
    id
    startDate
    finishDate
    studentId
    healthGroupId
    physicalEducationId
    student {
      lastName
      firstName
      secondName
      birthDate
      isExpelled
    }
    physicalEducation {
      id
      title
    }
    healthGroup {
      id
      title
    }
  }
}
    `;

/**
 * __useGetCertificateByIdQuery__
 *
 * To run a query within a React component, call `useGetCertificateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCertificateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCertificateByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCertificateByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCertificateByIdQuery, GetCertificateByIdQueryVariables> & ({ variables: GetCertificateByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCertificateByIdQuery, GetCertificateByIdQueryVariables>(GetCertificateByIdDocument, options);
      }
export function useGetCertificateByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCertificateByIdQuery, GetCertificateByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCertificateByIdQuery, GetCertificateByIdQueryVariables>(GetCertificateByIdDocument, options);
        }
export function useGetCertificateByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCertificateByIdQuery, GetCertificateByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCertificateByIdQuery, GetCertificateByIdQueryVariables>(GetCertificateByIdDocument, options);
        }
export type GetCertificateByIdQueryHookResult = ReturnType<typeof useGetCertificateByIdQuery>;
export type GetCertificateByIdLazyQueryHookResult = ReturnType<typeof useGetCertificateByIdLazyQuery>;
export type GetCertificateByIdSuspenseQueryHookResult = ReturnType<typeof useGetCertificateByIdSuspenseQuery>;
export type GetCertificateByIdQueryResult = Apollo.QueryResult<GetCertificateByIdQuery, GetCertificateByIdQueryVariables>;
export const GetAllCoursesDocument = gql`
    query getAllCourses($params: CourseParamsInput!) {
  getAllCourses(params: $params) {
    id
    number
    groups {
      id
      title
    }
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
    query getCourseById($id: String!) {
  getCourseById(id: $id) {
    id
    number
    department {
      id
      title
    }
    groups {
      id
      title
      students {
        id
      }
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
 *      id: // value for 'id'
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
    query getDepartmentById($id: String!) {
  getDepartmentById(id: $id) {
    id
    title
    courses {
      id
      number
      groups {
        id
        title
      }
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
 *      id: // value for 'id'
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
    query getAllGroups($params: GroupParamsInput!) {
  getAllGroups(params: $params) {
    id
    title
    students {
      id
      firstName
      lastName
      secondName
      birthDate
      isExpelled
    }
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
    query getGroupById($id: String!) {
  getGroupById(id: $id) {
    id
    title
    students {
      id
      lastName
      firstName
      secondName
      birthDate
      certificates {
        id
        startDate
        finishDate
      }
    }
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
 *      id: // value for 'id'
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
    query getAllHealthGroups($params: HealthGroupParamsInput!) {
  getAllHealthGroups(params: $params) {
    id
    title
    certificates {
      id
      startDate
      finishDate
      studentId
    }
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
    query getHealthGroupById($id: String!) {
  getHealthGroupById(id: $id) {
    id
    title
    certificates {
      id
      startDate
      finishDate
      student {
        id
        lastName
        firstName
        secondName
      }
    }
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
 *      id: // value for 'id'
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
    query getAllPhysicalEducations($params: PhysicalEducationParamsInput!) {
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
export const GetPhysicalEducationByIdDocument = gql`
    query getPhysicalEducationById($id: String!) {
  getPhysicalEducationById(id: $id) {
    id
    title
    certificates {
      id
      startDate
      finishDate
      student {
        id
        lastName
        firstName
        secondName
      }
    }
  }
}
    `;

/**
 * __useGetPhysicalEducationByIdQuery__
 *
 * To run a query within a React component, call `useGetPhysicalEducationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhysicalEducationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhysicalEducationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhysicalEducationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables> & ({ variables: GetPhysicalEducationByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables>(GetPhysicalEducationByIdDocument, options);
      }
export function useGetPhysicalEducationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables>(GetPhysicalEducationByIdDocument, options);
        }
export function useGetPhysicalEducationByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables>(GetPhysicalEducationByIdDocument, options);
        }
export type GetPhysicalEducationByIdQueryHookResult = ReturnType<typeof useGetPhysicalEducationByIdQuery>;
export type GetPhysicalEducationByIdLazyQueryHookResult = ReturnType<typeof useGetPhysicalEducationByIdLazyQuery>;
export type GetPhysicalEducationByIdSuspenseQueryHookResult = ReturnType<typeof useGetPhysicalEducationByIdSuspenseQuery>;
export type GetPhysicalEducationByIdQueryResult = Apollo.QueryResult<GetPhysicalEducationByIdQuery, GetPhysicalEducationByIdQueryVariables>;
export const GetAllStudentsDocument = gql`
    query getAllStudents($params: StudentParamsInput!) {
  getAllStudents(params: $params) {
    id
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
export const GetStudentByIdDocument = gql`
    query getStudentById($id: String!) {
  getStudentById(id: $id) {
    id
    lastName
    firstName
    secondName
    birthDate
    groupId
    isExpelled
    certificates {
      id
      startDate
      finishDate
    }
    group {
      id
      title
    }
  }
}
    `;

/**
 * __useGetStudentByIdQuery__
 *
 * To run a query within a React component, call `useGetStudentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStudentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables> & ({ variables: GetStudentByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
      }
export function useGetStudentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
        }
export function useGetStudentByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
        }
export type GetStudentByIdQueryHookResult = ReturnType<typeof useGetStudentByIdQuery>;
export type GetStudentByIdLazyQueryHookResult = ReturnType<typeof useGetStudentByIdLazyQuery>;
export type GetStudentByIdSuspenseQueryHookResult = ReturnType<typeof useGetStudentByIdSuspenseQuery>;
export type GetStudentByIdQueryResult = Apollo.QueryResult<GetStudentByIdQuery, GetStudentByIdQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile {
  getProfile {
    id
    login
    isAdmin
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export function useGetProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;