package events

import (
	"time"

	"github.com/zate/arpg/backend/state"
)

// ObjectDestroyed struct
type ObjectDestroyed struct {
	//Id uint32
	DestroyedObject state.Object
	DestroyedBy     state.Object
	//DestroyedBy uint32
	//ShotSpaceship *state.Spaceship
	Timestamp time.Time
}
