import { InMemoryChallengesRepository } from "../../../tests/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
    it("should be able to create a new chalenge submission", async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: "Vitor",
            email: "vitor@exemple.com"
        })

        const chalenge = Challenge.create({
            title: "Challenge 01",
            instructionsUrl: "http://www.exemple.com"
        })
        

        studentsRepository.items.push(student);
        challengesRepository.items.push(chalenge);


        const sut = new CreateChallengeSubmission(
            studentsRepository,
            challengesRepository,
        );

        const response = await sut.execute({
            studentId: "fake-student-id",
            challengeId: "fake-challenge-id",
        })

        expect(response).toBeTruthy();
    });
});