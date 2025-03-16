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

export type GetAllCoursesQueryVariables = Exact<{
  params: CourseParamsInput;
}>;


export type GetAllCoursesQuery = { __typename?: 'Query', getAllCourses: Array<{ __typename?: 'CourseModel', id: string, number: number, department: { __typename?: 'DepartmentModel', id: string, title: string } }> };

export type GetAllDepartmentsQueryVariables = Exact<{
  params: DepartmentParamsInput;
}>;


export type GetAllDepartmentsQuery = { __typename?: 'Query', getAllDepartments: Array<{ __typename?: 'DepartmentModel', id: string, title: string, courses?: Array<{ __typename?: 'CourseModel', id: string, number: number }> | null }> };

export type GetDepartmentByIdQueryVariables = Exact<{
  getDepartmentById: Scalars['String']['input'];
}>;


export type GetDepartmentByIdQuery = { __typename?: 'Query', getDepartmentById: { __typename?: 'DepartmentModel', id: string, title: string, courses?: Array<{ __typename?: 'CourseModel', id: string, number: number }> | null } };


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