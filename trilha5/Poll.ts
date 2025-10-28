class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    const currentVotes = this.votes[candidate] || 0;
    this.votes[candidate] = currentVotes + 1;
    console.log(`Voto de enquete para ${candidate}.`);
  }

  getResults(): string[] {
    const entries = Object.entries(this.votes);

    return entries.map((entry) => entry[0]);
  }
}
