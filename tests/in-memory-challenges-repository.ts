import { ChallengesRepository } from "../src/application/repositories/ChallengesRespository";
import { Challenge } from "../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
    public items: Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
        const Challenge = this.items.find(Challenge => Challenge.id === id);

        if(!Challenge) {
            return null;
        }

        return Challenge;
    }
}