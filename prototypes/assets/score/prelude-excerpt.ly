\version "2.26.0"
\language "english"

% Opening three measures of Christos Plachouras's Prelude in Ab.
% Both original voices remain on one stave, as in the supplied full score.
% Only the line breaks, spacing, and excerpt boundaries are changed.
\header { tagline = ##f }
#(set-global-staff-size 20)
\paper {
  indent = 0\mm
  line-width = 104\mm
  paper-width = 108\mm
  paper-height = 125\mm
  top-margin = 5\mm
  bottom-margin = 5\mm
  left-margin = 2\mm
  right-margin = 2\mm
  ragged-last = ##f
  ragged-bottom = ##t
  system-system-spacing = #'((basic-distance . 22) (minimum-distance . 18) (padding . 7) (stretchability . 0))
}
upper = \relative a' {
  \accidentalStyle neo-modern
  \clef treble \key c \major \time 11/16
  <a bf df g>8\( [ <a bf df g>8 <a bf df g>8 <a bf df g>8 ] <bf ef gf bf>8.\) | \break
  <a bf df g>8\( [ <a bf df g>8 <a bf df g>8 <a bf df g>8 ] <bf ef gf bf>8.\) | \break
  \time 13/16
  <b ef gf bf>8\( [ <df f af df>8 <b ef gf bf>8 ] <af cf ef gf>8 [ <cf df gf af>8 <cf ef af bf>8.\) ] |
}
lower = \relative gs {
  \accidentalStyle neo-modern
  \clef treble \key c \major \time 11/16
  <af ef' f>8\pp\( [ <af ef' f>8 <af ef' f>8 <af ef' f>8 ] <b e f>8.\) |
  <af ef' f>8\( [ <af ef' f>8 <af ef' f>8 <af ef' f>8 ] <b e f>8.\) |
  \time 13/16 <af ef' f>8\( <b e f>4\) ~ ~ ~ <b e f>4.. |
}
\score {
  \new Staff <<
    \new Voice { \voiceOne \upper }
    \new Voice { \voiceTwo \lower }
  >>
  \layout {
    \context {
      \Score
      \omit BarNumber
      \override TimeSignature.break-visibility = #end-of-line-invisible
    }
  }
}
