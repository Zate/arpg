package game

import (
	"time"

	"github.com/zate/arpg/backend/constants"
	"github.com/zate/arpg/backend/events"
)

// PhysicsTicker struct
type PhysicsTicker struct {
	currentFrameID  uint32
	eventDispatcher *events.EventDispatcher
}

// NewPhysicsTicker func
func NewPhysicsTicker(eventDispatcher *events.EventDispatcher) *PhysicsTicker {
	return &PhysicsTicker{
		currentFrameID:  1,
		eventDispatcher: eventDispatcher,
	}
}

// Run func
func (ticker *PhysicsTicker) Run() {
	var i uint32
	i = 0
	for range time.Tick(constants.PhysicsFrameDuration) {
		event := &events.TimeTick{
			FrameID: i,
		}
		ticker.eventDispatcher.FireTimeTick(event)
		i++
	}
}
