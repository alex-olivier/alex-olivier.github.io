const initContactForm = () => {
  const form = document.querySelector("#contact-form");
  const statusRegion = document.querySelector("#contact-form-status");
  if (!form || !statusRegion) return;

  const fieldNames = ["name", "email", "subject", "message"];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setStatus = (message, type = "") => {
    statusRegion.textContent = message;
    statusRegion.classList.remove("is-success", "is-error");
    statusRegion.removeAttribute("role");

    if (type === "success") {
      statusRegion.classList.add("is-success");
      statusRegion.setAttribute("role", "status");
    } else if (type === "error") {
      statusRegion.classList.add("is-error");
      statusRegion.setAttribute("role", "alert");
    }
  };

  const setFieldError = (fieldName, message = "") => {
    const field = form.elements[fieldName];
    const errorNode = document.querySelector(`#${fieldName}-error`);
    if (!field || !errorNode) return;

    errorNode.textContent = message;
    const hasError = Boolean(message);
    field.classList.toggle("is-invalid", hasError);
    field.setAttribute("aria-invalid", hasError ? "true" : "false");

    if (hasError) {
      errorNode.setAttribute("role", "alert");
    } else {
      errorNode.removeAttribute("role");
    }
  };

  const validateField = (fieldName) => {
    const field = form.elements[fieldName];
    if (!field) return true;

    const value = field.value.trim();
    field.value = value;

    if (!value) {
      setFieldError(fieldName, "This field is required.");
      return false;
    }

    if (fieldName === "email" && !emailPattern.test(value)) {
      setFieldError("email", "Enter a valid email address.");
      return false;
    }

    setFieldError(fieldName, "");
    return true;
  };

  fieldNames.forEach((fieldName) => {
    const field = form.elements[fieldName];
    if (!field) return;

    field.addEventListener("blur", () => {
      validateField(fieldName);
    });

    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) {
        validateField(fieldName);
      }
      setStatus("");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const invalidFields = fieldNames.filter(
      (fieldName) => !validateField(fieldName),
    );

    if (invalidFields.length > 0) {
      setStatus(
        "Please correct the highlighted fields and try again.",
        "error",
      );
      const firstInvalidField = form.elements[invalidFields[0]];
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    setStatus(
      "Form is valid. No backend endpoint is connected yet, so no message was sent.",
      "success",
    );
  });
};

const initActiveNavLinks = () => {
  const navLinks = Array.from(
    document.querySelectorAll('.navbar .nav-link[href^="#"]'),
  );
  if (navLinks.length === 0) return;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const navTargets = navLinks
    .map((link) => {
      const targetId = link.getAttribute("href")?.slice(1);
      const section = targetId ? document.getElementById(targetId) : null;
      if (!targetId || !section) return null;
      return { link, targetId, section };
    })
    .filter(Boolean);

  if (navTargets.length === 0) return;

  const setActiveLink = (activeId) => {
    navTargets.forEach(({ link, targetId }) => {
      const isActive = targetId === activeId;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const visibleRatios = new Map(
    navTargets.map(({ targetId }) => [targetId, 0]),
  );
  const hashTargetId = window.location.hash.replace("#", "");
  const hasHashTarget = navTargets.some(
    ({ targetId }) => targetId === hashTargetId,
  );
  setActiveLink(hasHashTarget ? hashTargetId : navTargets[0].targetId);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibleRatios.set(
          entry.target.id,
          entry.isIntersecting ? entry.intersectionRatio : 0,
        );
      });

      const [mostVisibleId, highestRatio] = Array.from(
        visibleRatios.entries(),
      ).reduce(
        (currentBest, candidate) =>
          candidate[1] > currentBest[1] ? candidate : currentBest,
        ["", 0],
      );

      if (highestRatio > 0) {
        setActiveLink(mostVisibleId);
      }
    },
    {
      root: null,
      threshold: [0.1, 0.25, 0.5, 0.75],
      rootMargin: "-35% 0px -45% 0px",
    },
  );

  navTargets.forEach(({ section }) => observer.observe(section));

  navTargets.forEach(({ link, targetId, section }) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", `#${targetId}`);
      setActiveLink(targetId);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  initActiveNavLinks();
});
