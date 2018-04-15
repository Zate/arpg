package simulation

import "github.com/zate/arpg/backend/state"

type Collision interface {
	collide(state.Object, state.Object)
}
