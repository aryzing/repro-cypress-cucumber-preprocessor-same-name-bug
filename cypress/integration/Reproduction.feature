Feature: Repro

  Scenario: S1
    Given the user is authenticated
    When W1
    Then T1

  Scenario: S2
    Given G2
    When W2
    Then the user is authenticated
