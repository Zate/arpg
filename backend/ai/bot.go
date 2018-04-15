package ai

import "github.com/zate/arpg/backend/state"

type Bot interface {
	HandleStateUpdate(space *state.Space, spaceship *state.Spaceship)
}
