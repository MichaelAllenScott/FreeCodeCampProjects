using System;

namespace Design_Pattern_Project
{
    public static class StatePattern
    {
        /*
         * The state pattern is a design pattern that allows an object to completely change its behaviour depending upon its current internal state. 
         * By substituting classes within a defined context, the state object appears to change its type at run-time.
         * 
         * 1.Context = The Context class is used by clients of the state design pattern. Clients do not access the state objects directly. 
         *      The Context class holds a concrete state object that provides the behaviour according to its current state.
         * 
         * 2.StateBase = This abstract class is the base class for all concrete state classes. StateBase defines the interface that will be used by 
         *      the Context object to access the changeable functionality. 
         *      No state, in terms of fields or properties, is defined in the StateBase class or its subclasses.
         * 
         * 3.ConcreteState = The concrete state classes provide the real functionality that will be used by the Context object. 
         *      Each state class provides behaviour that is applicable to a single state of the Context object. 
         *      They may also include instructions that cause the Context to change its state.
         */
        public static void PerformPattern()
        {
            AudioPlayer audioPlayer = new AudioPlayer();
            audioPlayer.PressPlay();
            audioPlayer.ChangeAudioSource();
            audioPlayer.PressPlay();
            audioPlayer.PressPause();
            audioPlayer.ChangeAudioSource();
            audioPlayer.PressPlay();
        }
    }

    //Context
    public class AudioPlayer
    {
        private AudioPlayerState _audioPlayerState;

        public AudioPlayer()
        {
            _audioPlayerState = new MP3State();
        }

        public void PressPlay()
        {
            _audioPlayerState.PressPlay(this);
        }

        public void PressPause()
        {
            _audioPlayerState.PressPause(this);
        }

        public void ChangeAudioSource()
        {
            _audioPlayerState.ChangeAudioSource(this);
        }

        public AudioPlayerState State
        {
            get { return _audioPlayerState; }
            set { _audioPlayerState = value; }
        }
    }

    // StateBase
    public abstract class AudioPlayerState
    {
        public abstract void PressPlay(AudioPlayer player);
        public abstract void PressPause(AudioPlayer player);
        public abstract void ChangeAudioSource(AudioPlayer player);
    }

    //ConcreteState
    public class MP3State : AudioPlayerState
    {
        private bool musicPlaying = false;
        public override void PressPlay(AudioPlayer player)
        {
            Console.WriteLine("Playing MP3.");
            musicPlaying = true;
        }

        public override void PressPause(AudioPlayer player)
        {
            Console.WriteLine("Pausing MP3.");
            musicPlaying = false;
        }

        public override void ChangeAudioSource(AudioPlayer player)
        {
            Console.WriteLine("Changing Audio Source to Radio.");
            player.State = new RadioState();
        }
    }

    //ConcreteState
    public class RadioState : AudioPlayerState
    {
        private bool musicPlaying = false;
        public override void PressPlay(AudioPlayer player)
        {
            Console.WriteLine("Playing Radio.");
            musicPlaying = true;
        }

        public override void PressPause(AudioPlayer player)
        {
            Console.WriteLine("Pausing Radio.");
            musicPlaying = false;
        }

        public override void ChangeAudioSource(AudioPlayer player)
        {
            Console.WriteLine("Changing Audio Source to MP3");
            player.State = new MP3State();
        }
    }
}
