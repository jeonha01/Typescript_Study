// // 문제 1번
// type User = {
//     name: string;
//     email: string;
//     password: string;
// };

// // 함수 작성
// function updateUserForm(
//     user: User,
//     updates: Partial<User>
// ): User {
//     return { ...user, ...updates };
// }

// // 테스트 코드
// const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
// const updatedForm = { email: "new-email@example.com" };

// console.log(updateUserForm(currentUser, updatedForm));
// // 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }

// // 문제 2번
// type UserProfile = {
//     id: number;
//     name: string;
//     email: string;
//     address: string;
// };

// // 함수 작성
// function getProfileSummary(user): Pick<UserProfile, "id" | "name"> {
//     return { id: user.id, name: user.name };
// }

// // 테스트 코드
// const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };

// console.log(getProfileSummary(userProfile));
// // 기대 출력: { id: 1, name: "Alice" }

// // 문제 3번
// type User = {
//     name: string;
//     email: string;
//     password: string;
//     role: string;
// };

// function filterSensitiveInfo(user): Omit<User, "password"> {
//   const { password, ...filteredInfo } = user;
//   return filteredInfo;
// }

// // 테스트 코드
// const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };

// console.log(filterSensitiveInfo(userInfo));
// // 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }

// // 문제 4번
// type TeamMember = {
//   id: number;
//   name: string;
//   email: string;
//   role: "developer" | "designer" | "manager";
//   isActive: boolean;
// };

// // 1. `createTeamMember` 함수
// function createTeamMember(data: Partial<TeamMember> & Pick<TeamMember, "id">): TeamMember {
//   return {
//     id: data.id,
//     name: data.name || "",
//     email: data.email || "",
//     role: data.role || "developer",
//     isActive: data.isActive ?? true,
//   };
// }

// // 2. `filterTeamMembers` 함수
// function filterTeamMembers(
//   members: TeamMember[],
//   filter: Pick<TeamMember, "role" | "isActive">
// ): TeamMember[] {
//   return members.filter(
//     (member) =>
//       member.role === filter.role && member.isActive === filter.isActive
//   );
// }

// // 3. `removeSensitiveInfo` 함수
// function removeSensitiveInfo(members: TeamMember[]): Omit<TeamMember, "email">[] {
//   return members.map(({ email, ...rest }) => rest);
// }

// // 테스트 코드
// const members: TeamMember[] = [
//   { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
//   { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
//   { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
// ];

// const newMember = createTeamMember({ id: 4, name: "Diana" });
// console.log(newMember);
// // 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
// console.log(activeDesigners);
// // 출력: []

// const sanitizedMembers = removeSensitiveInfo(members);
// console.log(sanitizedMembers);
// // 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]