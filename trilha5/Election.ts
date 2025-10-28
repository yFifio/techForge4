class Election extends VoteSystem {
  voteFor(candidate: string): void {
    const currentVotes = this.votes[candidate] || 0;
    this.votes[candidate] = currentVotes + 1;
    console.log(`Voto computado para ${candidate}.`);
  }

  getResults(): Record<string, number> {
    return this.votes;
  }
}
