// 1번
// const enum TaskStatus {
//     Pending = "대기 중",
//     InProgress = "진행 중",
//     Completed = "완료됨",
// }

// function getStatusMessage(status: TaskStatus): string {
//     if (status == "완료됨") {
//         return "작업이 완료되었습니다."
//     }
//     return `작업이 ${status}입니다.`
// }

// console.log(getStatusMessage(TaskStatus.Pending));
// console.log(getStatusMessage(TaskStatus.InProgress));
// console.log(getStatusMessage(TaskStatus.Completed));

// 2번
// const enum TaskStatus {
//     Pending = "작업 대기 중",
//     InProgress = "작업 진행 중",
//     Completed = "작업 완료",
//     Failed = "작업 실패",
// }

// function processTask(status: TaskStatus, input: unknown): string {
//     if (status == "작업 대기 중" && typeof input === "string") {
//         return input.toUpperCase();
//     } else if (status == "작업 진행 중" && typeof input === "string") {
//         return input.toLowerCase();
//     } else if (status == "작업 완료" && typeof input === "string") {
//         return "완료: " + input;
//     } else if (status == "작업 실패" && typeof input === "string") {
//         return "에러: 작업이 실패했습니다."
//     } else {
//         return "에러: 입력값은 문자열이어야 합니다."
//     }
// }

// console.log(processTask(TaskStatus.Pending, "task1"));
// console.log(processTask(TaskStatus.InProgress, "TaskA"));
// console.log(processTask(TaskStatus.Completed, "Report1"));
// console.log(processTask(TaskStatus.Failed, "TaskX"));
// console.log(processTask(TaskStatus.Pending, 42));

// 3번
// const enum Log {
//     Info = "[INFO]",
//     Error = "[ERROR]",
//     Debug = "[DEBUG]",
// }

// function message(event: string) {

// }

// function level(event: Log) {

// }

// 3번 해설 코드 => 함수 타입을 정의
// type LogFunction = (message: string, level: LogLevel) => void;

// const logMessage: any = (message, level) => {
//     return console.log(level + message)
// }

// logMessage("시스템이 시작되었습니다.", Log.Info);
// logMessage("네트워크 연결 실패!", Log.Error);
// logMessage("디버깅 모드 활성화", Log.Debug);

// 4번
// function processAny(input: any): string {
//     return String(input);
// }

// function processUnknown(input: unknown): string | number {
//     if (typeof input === "string") {
//         return input.toUpperCase();
//     } else if (typeof input === "number") {
//         return input * 10;
//     } else {
//         return "에러 발생";
//     }
// }

// console.log(processAny("hello"));
// console.log(processAny(42));
// console.log(processAny(true));

// console.log(processUnknown("hello"));
// console.log(processUnknown(42));
// console.log(processUnknown(true));