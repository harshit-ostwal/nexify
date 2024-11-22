export async function PUT(req) {
    const session = await getServerSession(authOptions);
  
    if (!session || !session.data || !session.data.id) {
      return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }
  
    const { id, subject, fullMark, A } = await req.json();
  
    const skill = await prisma.skills.update({
      where: { id },
      data: {
        subject,
        fullMark,
        A,
        updatedAt: new Date(),
      },
    });
  
    return NextResponse.json({ skill });
  }  